# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido
- La estructura y jerarquía básica de una aplicación React Native: `View → Text → StyleSheet`.
- El rol de `View` como contenedor visual y estructural, y de `Text` como componente imprescindible para mostrar cualquier cadena de texto.
- Cómo definir y organizar estilos como objetos JavaScript mediante la API `StyleSheet.create()`.
- El uso de **Flexbox** para el posicionamiento y maquetación en pantallas móviles:
  - `flex: 1`: Hace que el contenedor principal ocupe todo el espacio disponible de la pantalla.
  - `justifyContent: 'center'`: Centra los componentes hijos en el eje principal (vertical por defecto en React Native).
  - `alignItems: 'center'`: Centra los componentes hijos en el eje transversal (horizontal).
- Cómo establecer una jerarquía visual clara (diferenciando título y subtítulo en peso y tamaño) y la incorporación de tipografías personalizadas (`Space Grotesk`) en Expo.

## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

**Respuesta:**  
La diferencia principal radica en su función estructural dentro del árbol de componentes nativo:

- **`View`**: Es el componente contenedor visual fundamental de React Native (el equivalente a un `<div>` en la web). Su propósito es agrupar otros componentes, definir la estructura del layout mediante Flexbox y aplicar estilos del modelo de caja (fondos, bordes, márgenes y paddings). En React Native, un `View` **no puede contener texto plano directamente como string**; si se coloca texto sin envolver dentro de un `View`, la aplicación generará un error en tiempo de ejecución.
- **`Text`**: Es el único componente primitivo encargado de renderizar caracteres y texto en pantalla (equivalente a un `<p>` o `<span>`). Cualquier texto visible en una app debe estar obligatoriamente dentro de una etiqueta `<Text>`. Además, admite propiedades tipográficas exclusivas (`fontSize`, `fontWeight`, `fontFamily`, `color`, `letterSpacing`, `lineHeight`) y permite anidarse con otros elementos `Text` para aplicar estilos en línea con herencia tipográfica.

## Qué he modificado
- **Estructura base de componentes**:
  - Se configuró el contenedor principal `View` con `flex: 1`, `justifyContent: 'center'` y `alignItems: 'center'` para centrar el contenido en ambos ejes.
  - Se definieron el título principal (`"React Native"`) y el subtítulo (`"Mi primera pantalla"`).
- **Resolución del reto**:
  - Se añadió la tercera línea requerida con el texto exacto `"Curso 2026/27"` sin romper el centrado del contenedor.
- **Estilos personalizados conservados**:
  - Se mantuvieron los estilos propios: color de fondo claro (`#fff7ddff`), jerarquía tipográfica con la fuente *Space Grotesk*, tamaños proporcionados (`48px` para el título, `24px` para el subtítulo y `18px` para el reto) y color de acento ocre/dorado (`#9a7e20ff`).
- **Punto de entrada y estructura**:
  - `src/app/index.tsx`: Pantalla principal y punto de entrada de la aplicación bajo Expo Router.

## Resultado
La interfaz muestra una pantalla limpia y armónica sobre un fondo claro en tono crema suave (`#fff7ddff`). Los elementos aparecen perfectamente centrados en ambos ejes (vertical y horizontal):
1. **React Native**: Título de gran impacto visual (48px) con un trazo ligero.
2. **Mi primera pantalla**: Subtítulo secundario con tipografía *Space Grotesk* (24px).
3. **Curso 2026/27**: Tercera línea correspondiente al reto, destacada en semibold y color ocre (`#9a7e20ff`).

El título destaca claramente sobre los subtítulos, los tres textos quedan alineados en el centro geométrico de la pantalla y se cumplen al 100% las condiciones y checkpoints de la rúbrica.
