# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- **Control del eje principal con Flexbox (`flexDirection`)**:
  - En React Native, el valor por defecto de `flexDirection` en cualquier contenedor `View` es `'column'` (a diferencia del estándar web CSS donde es `'row'`).
  - Para alinear elementos en una fila horizontal contigua (uno al lado de otro), es necesario sobrescribir este comportamiento configurando explícitamente `flexDirection: 'row'`.
- **Estructuración jerárquica de componentes**:
  - Composición de un layout mixto: un contenedor padre en fila (`row` en `stats`) que a su vez aloja elementos hijos que se apilan verticalmente (`column` en cada `stat` para número y etiqueta).
  - Manejo de espaciado limpio entre columnas mediante la propiedad `gap: 36`.
- **Manejo de imágenes y avatares con el componente `Image`**:
  - Uso de imágenes remotas a través de la propiedad `source={{ uri: '...' }}`.
  - Creación de avatares perfectamente redondeados/circulares mediante la combinación de dimensiones simétricas fijas (`width`, `height`) y un `borderRadius` igual al 50% de su dimensión (en este caso, 110x110 con `borderRadius: 55`).
- **Profundidad visual y sombras multiplataforma**:
  - Implementación de sombras físicas con `elevation: 2` para dispositivos Android y `shadowColor`, `shadowOffset`, `shadowOpacity` y `shadowRadius` para iOS.
- **Tipografía y coherencia estética**:
  - Aplicación de fuentes personalizadas (*Google Sans Flex*) para jerarquizar el peso del nombre (`700Bold`), las métricas numéricas (`700Bold`) y los textos secundarios/etiquetas (`400Regular`).

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

**Respuesta:**  
Se debe aplicar `flexDirection: 'row'` en el **`View` contenedor padre que agrupa las estadísticas** (en este proyecto, `<View style={styles.stats}>`), y **no** en cada estadística individual (`styles.stat`) ni en la tarjeta principal (`styles.card`).

**Justificación:**
1. **Regla de dirección de Flexbox sobre hijos directos:** La propiedad `flexDirection` determina exclusivamente el flujo y la dirección en la que se ordenan los **hijos inmediatos** de ese contenedor. Para que los bloques de estadísticas se posicionen uno junto al otro de forma horizontal (de izquierda a derecha), la instrucción debe residir en el elemento padre que los envuelve a todos.
2. **Comportamiento por defecto en React Native:** Como el valor por defecto en React Native es `flexDirection: 'column'`, si no declaramos `row` en el contenedor padre, cada estadística se apilará verticalmente hacia abajo ocupando una línea entera.
3. **Preservación del layout vertical dentro de cada estadística:** Cada bloque de estadística está formado internamente por dos elementos: el valor numérico arriba y el texto descriptivo abajo. Si pusiéramos `flexDirection: 'row'` dentro de la propia estadística individual, el número y su etiqueta quedarían pegados en horizontal (ej. `"24 Proyectos"` en una misma línea), desvirtuando el diseño. Al colocar `row` únicamente en el padre `stats`, logramos una fila de columnas (`row` en el contenedor general y `column` natural en cada métrica hija).

## Qué he modificado
- **Punto de entrada y estructura**:
  - El código de la aplicación se encuentra en `src/app/index.tsx` (equivalente funcional a `App.tsx` bajo la arquitectura de Expo Router).
- **Componente `Image` (Avatar)**:
  - Se configuró la imagen de perfil con fuente remota (`https://i.pravatar.cc/300`), tamaño simétrico de `110x110` y esquinas redondeadas al 50% (`borderRadius: 55`) para lograr una circunferencia perfecta.
- **Datos de perfil y jerarquía tipográfica**:
  - Nombre `"Laura Martínez"` en tamaño 25px con peso `GoogleSansFlex_700Bold`.
  - Cargo profesional `"Diseñadora UX/UI"` en tono slate neutro (`#64748b`) con peso regular.
- **Contenedor y bloque de estadísticas**:
  - Implementación del contenedor `stats` con `flexDirection: 'row'`, separación entre métricas con `gap: 36` y margen superior (`marginTop: 24`).
  - **Ampliación con la tercera estadística (Modificación solicitada)**:
    - Se incorporaron las 3 métricas con su respectivo valor y etiqueta:
      1. **Proyectos**: 24
      2. **Seguidores**: 1280
      3. **Contactos**: 86 (añadida como modificación/reto del ejercicio).
    - Creación del estilo `label` con color atenuado (`#64748b`), tamaño 13px y tipografía regular para diferenciar claramente el número de su título.
- **Estilos del contenedor y tarjeta**:
  - Fondo de pantalla cálido (`#f6e3a7ff`) para generar contraste y armonía con la tarjeta blanca.
  - Tarjeta central con `padding: 28`, esquinas suaves (`borderRadius: 22`), centrado horizontal de elementos (`alignItems: 'center'`) y sombras suaves combinadas para Android (`elevation: 2`) e iOS (`shadow*`).

## Resultado
La interfaz muestra una ficha de perfil elegante, limpia y perfectamente equilibrada en el centro de la pantalla sobre un fondo cálido:
1. **Avatar destacado**: En la parte superior luce la foto de perfil circular sin deformaciones de aspecto.
2. **Identidad**: Justo debajo se lee el nombre en negrita y el rol profesional en tono secundario.
3. **Métricas en fila**: En la base de la tarjeta se sitúan las tres estadísticas alineadas en fila horizontal mediante `flexDirection: 'row'`. Cada métrica presenta una estructura clara y legible de dos niveles (número grande en negrita arriba y etiqueta descriptiva debajo), con separación uniforme y sin tocar los bordes de la tarjeta.
