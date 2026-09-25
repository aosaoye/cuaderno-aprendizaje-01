# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- **Composición avanzada de interfaces bancarias y financieras móviles**:
  - Estructuración de pantallas complejas con múltiples niveles de jerarquía visual y foco atencional: saludo dinámico con icono de estado (`SunDim`), acceso a notificaciones (`Bell`), balance principal de saldo disponible, tarjeta virtual prémium y listado cronológico de transacciones.
  - Gestión ergonómica de áreas seguras (*safe areas*) en contenedores desplazables mediante `ScrollView` con `contentContainerStyle` configurado con `paddingTop: 60` y `paddingBottom: 40`.
- **Diseño de tarjetas de pago prémium (*Sanal Kart / Virtual Card*)**:
  - Implementación de degradados multidimensionales con `expo-linear-gradient` (`colors={['#1742c7', '#0f2c96', '#060c2c']}`).
  - Composición por capas (*layering*): superposición de un arco circular oscuro (`cardDarkArc`) para generar profundidad y curvatura de diseño orgánico.
  - Texturizado con micropatrones vectoriales digitales mediante `react-native-svg` (`<Svg>`, `<Circle>`), simulando la matriz de datos y luz cian/índigo de las aplicaciones fintech de última generación.
  - Maquetación de datos de pago: número de tarjeta enmascarado con asteriscos (`1234 **** **** 5678`), titular en mayúsculas, datos de seguridad (`**/**`, `CVV ***`) y logotipo de red financiera (`VISA`).
- **Arquitectura basada en datos (*Data-Driven UI*) y componentes reutilizables**:
  - Declaración y tipado en TypeScript de una colección centralizada (`MOVEMENTS`) que modela las transacciones con identificador único, título, fecha relativa, importe con signo, icono Lucide y color pastel asignado.
  - Renderizado dinámico de la lista mediante `.map()` invocando el componente funcional modular `<Movement />`.
- **Sistema de diseño limpio inspirado en Apple y el Ejercicio 08**:
  - Aplicación de "blancos cerámicos tintados" (fondos pasteles suaves `#f0f4f9`, `#faf2ee`, `#edf5f1`, `#fcf8ee`) con radio de curvatura ergonómico (`borderRadius: 22`).
  - Integración de iconografía vectorial escalable mediante `lucide-react-native` con trazo estilizado.
  - Codificación semántica del color: importes positivos (ingresos como la nómina) en verde esmeralda (`#16a34a`) e importes negativos (gastos) en pizarra oscura neutra (`#0f172a`).
- **Jerarquía tipográfica con Google Sans Flex**:
  - Aplicación de la familia *Google Sans Flex* en sus distintas variantes de peso (`GoogleSansFlex_600SemiBold`, `GoogleSansFlex_500Medium`, `GoogleSansFlex_400Regular`) para garantizar máxima legibilidad y acabados profesionales.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:

1. **Partes que conviene convertir en componentes reutilizables e independientes:**
   - **`Movement` (o `MovementItem` / `TransactionRow`)**:
     - *Justificación*: Cada fila de movimiento bancario comparte exactamente la misma estructura semántica y visual (contenedor con esquinas redondeadas, squircle blanco que aloja el icono de categoría, textos de concepto y fecha, importe formateado con color condicional y flecha de navegación). Dado que se repite $N$ veces en la pantalla, encapsularlo en un componente modular que reciba sus datos por `props` cumple con el principio DRY (*Don't Repeat Yourself*), permite renderizar colecciones mediante `.map()` o `FlatList`, y desacopla la lógica de presentación del archivo principal.
   - **`CreditCard` (o `VirtualCard` / `SanalCard`)**:
     - *Justificación*: La tarjeta bancaria contiene una maquetación gráfica muy rica y especializada (degradado lineal con `LinearGradient`, arco geométrico decorativo, matriz SVG de puntos, número enmascarado, titular, códigos de seguridad y logotipo de VISA). En una aplicación bancaria en producción, un usuario suele tener múltiples tarjetas (débito, crédito, tarjetas virtuales para compras online o monederos multidivisa) navegables mediante un carrusel horizontal. Convertirla en un componente `<CreditCard />` desacopla esta complejidad de la pantalla principal y permite reutilizarla en otras vistas (detalle de tarjeta, congelación/bloqueo de tarjeta, configuración de límites o pasarelas de pago).
   - **`HeaderGreeting` (o `UserGreetingBar`)**:
     - *Justificación*: La cabecera superior con el saludo contextual ("Buenos días" + icono de sol), el nombre del usuario y el botón de notificaciones/perfil es un patrón global reutilizable en múltiples pestañas o secciones de la aplicación (como transferencias, inversiones o ajustes), garantizando consistencia en toda la experiencia.

2. **Partes que tiene sentido dejar directamente en `App` (`index.tsx`):**
   - **El contenedor principal (`ScrollView`) y los estilos de layout global (`contentContainerStyle`)**:
     - *Justificación*: Define el marco estructural, el color de fondo general de la pantalla (`backgroundColor: '#ffffff'`) y los márgenes verticales de seguridad (*safe area padding*). Es la responsabilidad intrínseca del contenedor de página (*Page Component*).
   - **La orquestación del flujo y composición de la pantalla**:
     - *Justificación*: `App` debe actuar como el componente orquestador o contenedor inteligente (*Smart Component*), determinando el orden secuencial de los bloques (Cabecera $\rightarrow$ Saldo disponible $\rightarrow$ Tarjeta virtual $\rightarrow$ Título de sección $\rightarrow$ Lista de movimientos) y suministrando la fuente de datos a los componentes hijos.
   - **Los encabezados de sección estáticos (`sectionHeader` / `sectionTitle`)**:
     - *Justificación*: Un rótulo de texto simple como `"Últimos movimientos"` que solo cumple una función organizativa dentro de este flujo específico no requiere una capa de abstracción adicional, a menos que en el futuro incorpore selectores de filtrado interactivos o botones de acción globales.

## Qué he modificado
- **Punto de entrada y arquitectura bajo Expo Router**:
  - `src/app/index.tsx`: Implementación completa de la interfaz bancaria exclusivamente en `index.tsx`, respetando la regla estricta de no utilizar ni generar archivos `App.tsx` en la raíz.
- **Cabecera superior personalizada**:
  - Saludo `"Buenos días"` enriquecido con el icono `<SunDim size={40} color="gray" strokeWidth={1.2} />`, nombre del usuario `"Laura"` en gran formato (`34px`, peso medio) y botón de alertas con el icono `<Bell size={35} strokeWidth={1.2} />`.
- **Bloque de saldo disponible**:
  - Etiqueta descriptiva `"Saldo disponible"` en gris neutro y cifra destacada `"4.280,32 €"` con tipografía seminegrita de 34px y espaciado de caracteres optimizado.
- **Tarjeta bancaria virtual estilo *Sanal Kart***:
  - Réplica fiel del diseño de referencia solicitado: gradiente azul cobalto mediante `LinearGradient`, arco oscuro circular en segundo plano (`cardDarkArc`), matriz vectorial de micropuntos cian e índigo (`CardMatrixPattern`) con `react-native-svg`, rótulo `"SANAL KART"`, número de tarjeta con asteriscos (`1234 **** **** 5678`), titular `"LAURA MARTÍNEZ"`, códigos de seguridad `**/**` y `CVV ***`, y logotipo estilizado de `"VISA"` en negrita itálica con sombra profunda multiplataforma.
- **Colección de datos estructurada `MOVEMENTS`**:
  - Definición del array con las 4 transacciones requeridas (*Supermercado*, *Cafetería*, *Nómina*, *Electricidad*) con sus respectivos iconos de Lucide y fondos pasteles suaves.
- **Componente modular `<Movement />` y renderizado iterativo**:
  - Reemplazo de llamadas estáticas por el mapeo `MOVEMENTS.map(...)`.
  - Tarjetas redondeadas (`borderRadius: 22`) con pasteles tintados cerámicos, contenedor squircle blanco para el icono, detección automática de importes positivos en verde y flecha `<ArrowRight />` de navegación.
- **Tipografía moderna Google Sans Flex**:
  - Aplicación coherente de los pesos tipográficos cargados desde `_layout.tsx` en todos los elementos de la interfaz.

## Resultado
La interfaz bancaria resultante ofrece una experiencia visual y funcional prémium:
1. **Tarjeta Sanal Kart de alto impacto**: La tarjeta bancaria en gradiente azul cobalto con su arco decorativo, textura de puntos luminosos y logotipo VISA replica exactamente la estética solicitada por el usuario.
2. **Jerarquía visual equilibrada**: El saludo acogedor con `SunDim`, el bloque de saldo disponible y la tarjeta virtual captan el protagonismo visual en la parte superior de forma armoniosa.
3. **Escaneo rápido y limpio del historial**: Las tarjetas de movimientos en pasteles cerámicos suaves con iconografía de Lucide permiten distinguir de un vistazo el tipo de gasto y sus importes gracias al contraste cromático inteligente.
4. **Acabado nativo y fluido**: Rendimiento óptimo a 60 FPS gestionado por `ScrollView` con fuentes vectoriales y gráficos SVG escalables en cualquier dispositivo móvil.
