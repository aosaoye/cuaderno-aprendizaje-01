# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- **Virtualización y rendimiento con `FlatList`**:
  - Comprensión de por qué `FlatList` es el componente predilecto frente a `ScrollView` para colecciones de datos y catálogos: solo renderiza en memoria los elementos visibles en el viewport (*lazy loading* y reciclaje de vistas), logrando un uso óptimo de la memoria y 60 FPS constantes.
  - Implementación de cuadrículas bidimensionales mediante la propiedad nativa `numColumns={2}`.
  - Uso de la propiedad `columnWrapperStyle` para controlar la separación horizontal (`gap: 12`) entre las columnas de cada fila generada.
  - Identificación eficiente de elementos con `keyExtractor={(item) => item.id}`, permitiendo a React reconciliar el Virtual DOM sin renderizados innecesarios.
- **Desacoplamiento entre datos y presentación (*Data-Driven UI*)**:
  - Definición centralizada del catálogo mediante un array de objetos (`id`, `name`, `icon`, `bgColor`).
  - Uso de una única función plantilla `renderItem`: cualquier modificación en el diseño visual de la tarjeta repercute inmediatamente en todo el catálogo de productos (principio DRY).
- **Diseño de interfaces estilo Bento Grid / Apple Store**:
  - Composición de tarjetas con cabecera interactiva (título del producto a la izquierda y flecha `<ArrowRight />` a la derecha).
  - Aplicación de "blancos tintados" (fondos cerámicos suaves con una ligera saturación del 3-5%) para aportar profundidad, calidez y jerarquía estética sin saturar la pantalla.
  - Integración de iconos vectoriales SVG con `lucide-react-native` y `react-native-svg` con trazo estilizado (`strokeWidth: 1.2`) y dimensiones escalables (`size: 52`).

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
Modificar un producto en el array de datos en lugar de manipular manualmente el árbol JSX aporta ventajas determinantes de arquitectura, escalabilidad y mantenimiento:

1. **Separación de responsabilidades (*Separation of Concerns*):**
   - El array de datos representa el **modelo de información** (qué productos existen y qué atributos tienen: nombre, icono, color), mientras que la función `renderItem` dentro del JSX representa la **capa de presentación** (cómo se dibuja una tarjeta).
   - Mezclar datos y marcado escribiendo decenas de tarjetas repetidas a mano en el JSX ensucia el código y dificulta cualquier cambio futuro.

2. **Mantenibilidad y prevención de errores (*Clean Code*):**
   - En un catálogo con decenas o cientos de productos, buscar una tarjeta concreta dentro de un archivo JSX kilométrico es ineficiente y muy propenso a cometer fallos humanos (como olvidar cerrar etiquetas, alterar estilos accidentalmente en una tarjeta pero no en las demás o generar inconsistencias visuales).
   - Al editar el array, solo se modifica un valor puntual del objeto correspondiente (`name`, `icon`, `bgColor`), con la certeza absoluta de que el layout y la estructura general no se romperán.

3. **Principio DRY (*Don't Repeat Yourself*) y facilidad de rediseño:**
   - Si mañana se decide cambiar el radio de las esquinas (`borderRadius`), el tamaño del icono o añadir una nueva etiqueta de precio, **solo se cambia una única vez en la plantilla `renderItem`** y automáticamente se actualizan todos los productos del catálogo.

4. **Preparación directa para APIs y datos dinámicos:**
   - En una aplicación profesional en producción, los productos no están fijos en el código, sino que se descargan de un servidor backend mediante una API REST o GraphQL en formato JSON (un array de objetos). Al haber estructurado la pantalla sobre un array y `FlatList`, conectar un `fetch()` o un estado `useState` es inmediato y natural.

5. **Optimización del ciclo de renderizado:**
   - Gracias a la prop `keyExtractor`, React sabe qué elemento exacto del array ha cambiado por su `id`, optimizando los cálculos de renderizado y actualizando únicamente la tarjeta modificada sin volver a procesar el resto de la lista.

## Qué he modificado
- **Punto de entrada exclusivo bajo Expo Router**:
  - `src/app/index.tsx`: Implementación completa de la pantalla dentro de la arquitectura de Expo Router, cumpliendo con la regla estricta de no generar ni utilizar archivos `App.tsx`.
- **Colección de datos del catálogo**:
  - Array `products` configurado con 7 productos tecnológicos y musicales (*Teclado*, *Ratón*, *Monitor*, *Auriculares*, *Portátil*, *Móvil*, *Piano*), cada uno asociado a su componente de icono vectorial de Lucide y a su color de fondo tintado exclusivo.
- **Cuadrícula moderna con `FlatList`**:
  - Configuración de `numColumns={2}`, `columnWrapperStyle={styles.row}` con separación uniforme de 12px y `contentContainerStyle` con padding inferior de 40px para garantizar un scroll holgado.
- **Integración de iconos vectoriales SVG (`lucide-react-native`)**:
  - Incorporación de iconos SVG nítidos y ligeros (`Keyboard`, `Mouse`, `Monitor`, `Headphones`, `Laptop`, `Smartphone`, `KeyboardMusic`, `ArrowRight`).
- **Diseño visual Bento Card estilo Apple**:
  - Tarjetas redondeadas (`borderRadius: 26`), cabecera con distribución `space-between` para el nombre y la flecha, y cuerpo centralizado con el icono vectorial a 52px y trazo fino (`strokeWidth: 1.2`).
  - Paleta de fondos pasteles ultra suaves (*blush*, azul hielo, menta, crema, vainilla, cian ártico y lavanda) sobre un fondo blanco limpio.
  - Tipografía `GoogleSansFlex_500Medium` para títulos y nombres de productos.

## Resultado
La interfaz muestra un catálogo interactivo de productos de estética prémium inspirada en las cuadrículas Bento de Apple:
1. **Cuadrícula en 2 columnas fluida**: Las tarjetas de productos se distribuyen en filas de dos elementos con márgenes laterales y espaciado intermedio perfecto de 12px.
2. **Tarjeta destacada al pie**: El séptimo elemento (*Piano*) se despliega al final de la cuadrícula con su propio tono lavanda suave, creando un cierre visual muy atractivo.
3. **Jerarquía visual limpia**: Cada tarjeta combina su cabecera tipográfica con la flecha de acción y destaca el icono vectorial centrado de cada producto con acabados minimalistas.
4. **Experiencia nativa óptima**: Desplazamiento reactivo de alto rendimiento gestionado por `FlatList` con tipografía nítida y proporciones equilibradas en Android e iOS.
