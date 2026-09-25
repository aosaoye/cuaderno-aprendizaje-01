# Ejercicio 06 - Cuadrícula de métricas (Dashboard)

## Qué he aprendido
- **Diseño de cuadrículas (*grids*) con Flexbox**:
  - En React Native no existe CSS Grid nativo (`display: grid`), por lo que las distribuciones bidimensionales (filas y columnas) se construyen combinando `flexDirection: 'row'` con `flexWrap: 'wrap'`.
  - La propiedad `flexWrap: 'wrap'` permite que los elementos hijos que superen el ancho del contenedor salten automáticamente a una nueva línea o fila.
  - Uso de porcentajes en dimensiones (`width: '48%'`) junto con la propiedad `gap: 12` para calcular automáticamente una distribución limpia de 2 columnas por fila, asegurando responsividad en pantallas de distintos tamaños.
- **Modularización y componentes reutilizables con Props**:
  - Extracción y tipado con TypeScript del componente modular `<Metric title="..." value="..." change="..." />` (`{ title: string; value: string; change: string }`), evitando duplicación de código (principio DRY).
  - Encapsulación de estilos específicos de la tarjeta métrica (`card`, `label`, `value`, `change`) dentro del componente reutilizable.
- **Jerarquía y diseño de paneles ejecutivos (Dashboards)**:
  - Estructuración de cabecera visual con título jerárquico (`Dashboard`) y subtítulo descriptivo (`Resumen del negocio`).
  - Presentación clara de KPIs (indicadores clave de rendimiento): etiqueta descriptiva en tono neutro (`#64748b`), valor numérico destacado en negrita y métrica de tendencia porcentual con código cromático positivo (`#16a34a`).
- **Profundidad visual y coherencia tipográfica**:
  - Integración de elevación y sombras suaves (`elevation: 2` para Android y `shadow*` para iOS) sobre un fondo neutro moderno (`#f8fafc`).
  - Empleo de la familia tipográfica *Google Sans Flex* (`GoogleSansFlex_700Bold` y `GoogleSansFlex_400Regular`) garantizando consistencia estética con los ejercicios anteriores.

## Respuesta a la pregunta de comprensión
¿Por qué es necesario usar la propiedad `flexWrap: 'wrap'` junto con `flexDirection: 'row'` para construir una cuadrícula (*grid*) de tarjetas y qué ocurriría si no la incluyéramos?

**Respuesta:**  
Por defecto en Flexbox, la propiedad `flexWrap` tiene el valor `'nowrap'`. Esto significa que todos los elementos secundarios intentan comprimirse y encajarse obligatoriamente dentro de una **única línea** a lo largo del eje principal.

Si configuramos `flexDirection: 'row'` pero **no** indicamos `flexWrap: 'wrap'`:
1. **Compresión y desbordamiento**: Aunque a cada tarjeta se le asigne `width: '48%'`, Flexbox intentará forzar a las cuatro tarjetas a compartir una sola fila horizontal.
2. **Deformación visual**: Como el ancho acumulado de las cuatro tarjetas supera el 100% del contenedor (4 × 48% = 192%), los elementos o bien se comprimen perdiendo sus dimensiones definidas y deformando el texto, o bien se desbordan horizontalmente saliéndose de los márgenes visibles de la pantalla.

Al aplicar **`flexWrap: 'wrap'`**:
- Flexbox evalúa el espacio disponible en la fila actual: coloca la primera tarjeta (48%) y la segunda (48%) con su respectivo espaciado (`gap: 12`).
- Al llegar a la tercera tarjeta y comprobar que excede el ancho disponible del contenedor en esa línea, **rompe la línea y la traslada automáticamente a una nueva fila inferior**, repitiendo el proceso para la cuarta tarjeta.
- De este modo, se consigue un **layout de cuadrícula responsivo 2x2** limpio, adaptativo y perfectamente alineado.

## Qué he modificado
- **Punto de entrada y archivos del proyecto**:
  - Creación de `App.tsx` en la raíz de `EJERCICIO-06` para dar cumplimiento íntegro a los requisitos de entrega del repositorio y compatibilidad con el entorno de pruebas de React Native.
  - Implementación alineada en `src/app/index.tsx` bajo Expo Router, garantizando integración con el layout y carga de tipografías.
- **Componente modular `Metric`**:
  - Declaración del componente funcional `Metric` tipado con TypeScript para renderizar de manera limpia y declarativa las cuatro tarjetas de negocio:
    1. **Ventas**: 12.450 € (+12%)
    2. **Clientes**: 348 (+8%)
    3. **Pedidos**: 1.024 (+18%)
    4. **Conversión**: 7,4% (+2%)
- **Diseño del contenedor Grid y Tarjetas**:
  - Contenedor con `flexDirection: 'row'`, `flexWrap: 'wrap'` y separación uniforme de `gap: 12`.
  - Tarjetas al `width: '48%'`, fondo blanco puro (`#ffffff`), `borderRadius: 16`, padding interior de 18px y sombras multiplataforma (`elevation: 2` en Android y `shadow*` en iOS).
  - Tipografía enriquecida con *Google Sans Flex* (`GoogleSansFlex_700Bold` para títulos, valores e incrementos, y `GoogleSansFlex_400Regular` para subtítulos y etiquetas descriptivas).
  - Código cromático en el porcentaje de cambio en verde éxito (`#16a34a`) para indicar crecimiento favorable del negocio.

## Resultado
La interfaz muestra un dashboard ejecutivo moderno, claro y equilibrado:
1. **Encabezado**: Título "Dashboard" en gran escala (32px) con su subtítulo descriptivo "Resumen del negocio" en tono gris slate.
2. **Cuadrícula 2x2**: Las cuatro métricas organizadas en dos filas equilibradas de dos columnas cada una, con separación proporcional sin desbordamientos laterales.
3. **Legibilidad de datos**: Cada tarjeta destaca de un solo vistazo el nombre del KPI, el valor cuantitativo principal y la tasa de variación positiva, proporcionando una experiencia móvil nativa óptima.
