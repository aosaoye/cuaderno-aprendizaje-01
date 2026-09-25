# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- **Construcción de cuadrículas (*grids*) con Flexbox**:
  - En React Native no existe soporte para `display: grid` nativo de CSS web, por lo que las distribuciones bidimensionales (filas y columnas) se construyen mediante Flexbox combinando `flexDirection: 'row'` con `flexWrap: 'wrap'`.
  - La propiedad `flexWrap: 'wrap'` es imprescindible para permitir que los elementos secundarios que exceden el ancho horizontal del contenedor salten automáticamente a una nueva fila.
  - Uso de la propiedad moderna `gap: 12` para gestionar de forma nativa e integrada el espacio uniforme entre elementos hijos, tanto a lo largo del eje principal como del secundario, sin requerir márgenes manuales complejos.
- **Interacción entre anchos porcentuales y espaciados fijos**:
  - Comprensión de las restricciones matemáticas del modelo de caja (*box model*) en Flexbox: la suma de los anchos de los elementos más los espaciados en píxeles no puede superar el 100% del contenedor padre si queremos que permanezcan en la misma fila.
  - Aplicación de porcentajes adaptativos (`width: '48%'`) para reservar el margen necesario que absorba la separación (`gap`) entre columnas de forma responsiva en diferentes pantallas.
- **Componentes modulares y reutilizables con TypeScript**:
  - Creación del componente modular `<Metric title="..." value="..." />` tipado estrictamente con TypeScript (`{ title: string; value: string }`).
  - Aplicación del principio DRY (*Don't Repeat Yourself*): encapsulación de la estructura visual y de los estilos de la tarjeta métrica (`card`, `label`, `value`) en un único componente reutilizable.
- **Jerarquía visual y diseño de Dashboards**:
  - Presentación clara y legible de KPIs (*Key Performance Indicators*): título destacado en gran formato (32px), etiquetas descriptivas en tono neutro (`#64748b`) y valores métricos destacados con peso en negrita.
  - Implementación de profundidad con sombras suaves (`elevation: 1` en Android y propiedades `shadow*` en iOS) sobre fondo neutro (`#f8fafc`).

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Un ancho del **48% es mucho más práctico que el 50%** debido a la matemática de cálculo de espacio de Flexbox cuando conviven dimensiones relativas (porcentajes) con separaciones de tamaño fijo (`gap` o márgenes):

1. **El problema de usar un 50% con separación:**
   - Si asignamos a cada tarjeta un `width: '50%'`, la suma base de dos tarjetas ocupa exactamente el **100%** del ancho disponible del contenedor padre ($50\% + 50\% = 100\%$).
   - Al introducir cualquier tipo de separación entre tarjetas (como `gap: 12` o márgenes horizontales), el ancho total requerido para ubicar dos tarjetas en una misma fila excede el límite del contenedor:
     $$\text{Ancho total en la fila} = 50\% + 50\% + \text{gap} = 100\% + 12\text{px} > 100\%$$
   - Como el contenedor no dispone de más del 100% de su espacio disponible, Flexbox (al tener activado `flexWrap: 'wrap'`) no tiene espacio para alojar la segunda tarjeta en la misma línea. Por tanto, **fuerza el salto de línea prematuro**: cada tarjeta pasará a ocupar una fila completa individual, rompiendo la cuadrícula de dos columnas deseada.

2. **La ventaja práctica del 48%:**
   - Al definir `width: '48%'`, dos tarjetas consumen juntas el **96%** del ancho del contenedor ($48\% + 48\% = 96\%$).
   - Ese **4% restante queda libre como margen de tolerancia** para absorber sin desbordarse el valor absoluto de la separación (`gap: 12` o márgenes).
   - Dado que $48\% + 48\% + 12\text{px} \le 100\%$ en prácticamente cualquier pantalla móvil estándar, el contenedor puede ubicar perfectamente **dos tarjetas por fila de manera responsiva**.

3. **Simplicidad frente a cálculos complejos:**
   - A diferencia de la web donde es habitual recurrir a expresiones como `calc(50% - 6px)`, en React Native usar un porcentaje ligeramente inferior como `48%` es una solución limpia, rápida, compatible y que evita sobrecargas de cálculo dinámico.

## Qué he modificado
- **Punto de entrada y estructura**:
  - `src/app/index.tsx`: Implementación del dashboard bajo Expo Router con integración de layout y carga de tipografías (*Google Sans Flex*). Se prescinde de `App.tsx` manteniendo la arquitectura nativa del proyecto.
- **Componente reutilizable `Metric`**:
  - Se implementó el componente funcional `Metric` tipado con TypeScript `{ title: string; value: string }`, renderizando la etiqueta descriptiva y el valor principal en una tarjeta visual estilizada.
- **Incorporación de la modificación solicitada (Quinta métrica)**:
  - Sobre las cuatro métricas base del ejemplo (*Ventas: 12.450 €*, *Clientes: 348*, *Pedidos: 1.024*, *Conversión: 7,4%*), se añadió la **quinta tarjeta de métrica**:
    ```tsx
    <Metric title="Tickets" value="60" />
    ```
  - Esta modificación permite comprobar de forma visual el funcionamiento de `flexWrap: 'wrap'`, verificando cómo la quinta tarjeta salta automáticamente a una tercera fila y se sitúa en la columna izquierda con su ancho del 48%.
- **Estilos y contenedor Grid**:
  - Contenedor `.grid` configurado con `flexDirection: 'row'`, `flexWrap: 'wrap'` y `gap: 12`.
  - Tarjetas `.card` con `width: '48%'`, fondo blanco (`#ffffff`), esquinas redondeadas (`borderRadius: 16`), relleno interior de 18px y sombra sutil con elevación multiplataforma.
  - Título `"Dashboard"` con `fontSize: 32`, tipografía *Google Sans Flex Bold* y margen inferior de 24px para aportar aire y separación jerárquica con el contenido.

## Resultado
La interfaz muestra un panel de control (Dashboard) limpio, moderno y responsivo:
1. **Encabezado principal**: Título `"Dashboard"` con tipografía clara y destacada en la parte superior.
2. **Distribución en cuadrícula 2x2**: Las primeras cuatro métricas (*Ventas*, *Clientes*, *Pedidos*, *Conversión*) se organizan simétricamente en dos filas de dos tarjetas cada una, con una separación uniforme de 12px entre ellas.
3. **Comportamiento envolvente de la modificación**: La quinta tarjeta solicitada (*Tickets: 60*) salta automáticamente a una tercera fila gracias a `flexWrap: 'wrap'`, ubicándose limpiamente en la columna izquierda respetando la proporción y el radio de las tarjetas anteriores.
4. **Acabado nativo**: El fondo gris neutro (`#f8fafc`) resalta las tarjetas blancas y sus sombras sutiles, logrando una estética profesional lista para producción móvil.
