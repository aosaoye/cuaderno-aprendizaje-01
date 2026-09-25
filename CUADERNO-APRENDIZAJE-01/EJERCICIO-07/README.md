# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- **Uso del componente `ScrollView` para listas desplazables**:
  - Comprensión de la diferencia entre `View` (contenedor que queda delimitado al marco estático de la pantalla) y `ScrollView` (contenedor con motor de desplazamiento que permite alojar contenido que excede el alto del dispositivo).
  - Aplicación de scroll vertical fluido y natural en pantallas móviles para feeds y secuencias de tarjetas de contenido.
- **Componentes reutilizables y paso de propiedades (*Props*)**:
  - Declaración y tipado estricto con TypeScript del componente `<NewsCard category={...} title={...} />` con su interfaz de props `{ category: string; title: string }`.
  - Aplicación del principio DRY (*Don't Repeat Yourself*): desacoplar los datos dinámicos de la presentación visual para instanciar múltiples noticias a partir de una única plantilla de diseño sin duplicar código.
- **Jerarquía visual y escaneo de contenido (*Scannability*)**:
  - Organización estratégica de cada tarjeta para optimizar la lectura rápida en dispositivos móviles:
    1. **Categoría**: Texto superior en mayúsculas, tamaño reducido (12px), color azul vivo (`#2563eb`) y tipografía gruesa (`GoogleSansFlex_700Bold`) para identificar la temática de inmediato.
    2. **Titular**: Protagonista visual con tamaño destacado (20px) y peso en negrita.
    3. **Metadatos temporales**: Fecha o tiempo transcurrido (`"Hace 2 horas"`) en tono neutro (`#94a3b8`) y peso regular para no competir con el titular.
- **Estética nativa y profundidad de tarjetas**:
  - Maquetación de tarjetas con esquinas redondeadas pronunciadas (`borderRadius: 18`), relleno interior generoso (`padding: 18`) y sombras suaves combinadas para Android (`elevation: 2`) e iOS (`shadowColor`, `shadowOffset`, etc.) sobre un fondo neutro moderno (`#f8fafc`).

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
En una arquitectura basada en componentes modulares y reutilizables como `<NewsCard />`:

1. **Lo que debe cambiar (Contenido dinámico / Props):**
   - **Los datos e información específicos de cada noticia**:
     - La **categoría temática** (`category`): por ejemplo, `"TECNOLOGÍA"`, `"MÓVIL"`, `"CLOUD"`, `"CIBERSEGURIDAD"`.
     - El **titular o título** (`title`): el texto representativo de la noticia (ej. *"La IA transforma el desarrollo de software"*, *"React Native continúa evolucionando"*).
     - La **fecha o tiempo de publicación** (`date`): el indicador temporal relativo (ej. *"Hace 2 horas"*, *"Ayer"*), reflejando la vigencia de cada publicación.
     - *(En desarrollos avanzados también variarían la imagen de portada, el autor, el cuerpo de la noticia o el `id` único para la navegación a detalle).*
   - Toda esta información variable debe recibirse dinámicamente mediante **`props`** o consumirse desde un origen de datos (como un array, estado o API externa).

2. **Lo que debe permanecer igual (Estructura visual, diseño y experiencia de usuario):**
   - **La estructura semántica del árbol JSX**: La disposición fija y ordenada de los elementos dentro de la tarjeta (`View` contenedor $\rightarrow$ etiqueta de categoría $\rightarrow$ texto del titular $\rightarrow$ pie de fecha).
   - **El sistema de diseño y estilos (`StyleSheet`)**:
     - El contenedor de tarjeta: dimensiones, bordes redondeados (`borderRadius: 18`), relleno interior (`padding: 18`) y separación vertical uniforme (`marginBottom: 14`).
     - La paleta de colores: tarjeta blanca pura (`#ffffff`) sobre fondo gris neutro (`#f8fafc`), categoría en azul corporativo (`#2563eb`), titular en negro de alto contraste y fecha en gris secundario (`#94a3b8`).
     - La jerarquía tipográfica: misma familia de fuentes (*Google Sans Flex*), pesos diferenciados y tamaños relativos.
     - Los efectos de profundidad: sombra suave multiplataforma y elevación.
   - **La experiencia de usuario (UX)**: Mantener constante la presentación visual garantiza **predictibilidad y consistencia**. El usuario reconoce instantáneamente el patrón de diseño y puede escanear el feed con fluidez y sin fricción cognitiva.

## Qué he modificado
- **Punto de entrada y estructura en Expo Router**:
  - `src/app/index.tsx`: Implementación completa de la pantalla dentro de la arquitectura nativa de Expo Router, cumpliendo con la regla estricta de no generar ni usar `App.tsx`.
- **Contenedor con desplazamiento `ScrollView`**:
  - Se configuró `ScrollView` como contenedor principal con `flex: 1`, `backgroundColor: '#f8fafc'` y `paddingHorizontal: 20` para permitir el scroll natural del feed sin cortes en pantalla.
- **Componente modular `NewsCard`**:
  - Creación del componente funcional `NewsCard` tipado estrictamente con TypeScript para renderizar de manera limpia y declarativa cada artículo informativo.
- **Colección de noticias del feed**:
  - Renderizado ordenado de las cuatro noticias del feed:
    1. **TECNOLOGÍA**: *"La IA transforma el desarrollo de software"*
    2. **MÓVIL**: *"React Native continúa evolucionando"*
    3. **CLOUD**: *"Las arquitecturas cloud ganan protagonismo"*
    4. **CIBERSEGURIDAD**: *"Nuevas amenazas en la red, usuarios en alerta"*
- **Encabezado y jerarquía tipográfica**:
  - Título principal `"Noticias"` con `fontSize: 34`, margen superior de 60px para respetar la barra de estado y margen inferior de 20px.
  - Integración de fuentes variables *Google Sans Flex* cargadas desde `_layout.tsx` para garantizar acabados tipográficos de alta calidad.

## Resultado
La interfaz muestra un feed de noticias móvil limpio, moderno y altamente funcional:
1. **Desplazamiento interactivo**: El usuario puede hacer scroll vertical fluido a través de la lista de noticias con total naturalidad gracias al contenedor `ScrollView`.
2. **Cabecera destacada**: El título `"Noticias"` encabeza la pantalla con gran presencia visual y márgenes ergonómicos.
3. **Tarjetas modulares bien estructuradas**: Las cuatro noticias se presentan en tarjetas blancas con esquinas redondeadas y sombras sutiles que flotan sobre el fondo gris claro.
4. **Legibilidad y escaneo rápido**: El contraste cromático entre la etiqueta azul de la categoría, el titular en negrita y la marca temporal gris permite asimilar la información de un solo vistazo con una experiencia nativa óptima.
