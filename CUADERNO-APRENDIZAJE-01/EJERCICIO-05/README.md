# Ejercicio 05 - Tarjeta de producto

## Qué he aprendido
- **Composición de tarjetas comerciales (*Product Cards*)**:
  - Estructuración de contenedores de contenido mediante tarjetas visuales con esquinas redondeadas (`borderRadius: 20`) y la propiedad clave `overflow: 'hidden'` para garantizar que la imagen de cabecera respete el radio de curvatura superior de la tarjeta.
  - Integración de imágenes remotas escaladas al ancho total del contenedor (`width: '100%'`, `height: 220`).
- **Jerarquía visual y principios de diseño UX/UI en E-commerce**:
  - Organización estratégica de la información para guiar el escaneo ocular del usuario: identificación inmediata del producto (imagen y título), factores de decisión (precio y oferta) y llamada a la acción (botón de compra).
  - Aplicación de tipografías variables (*Google Sans Flex*) con diferenciación de pesos y tamaños (`500Medium` para títulos y metadatos, `700Bold` para precios, llamadas a la acción y badges).
- **Diseño de micro-componentes y badges promocionales**:
  - Maquetación de etiquetas tipo píldora (`borderRadius: 100`) para destacar estados comerciales como `"OFERTA"`, utilizando fondos suaves contrastados (`#fdcece`) con texto en tono vivo (`#D00000`).
- **Distribución de acciones en fila con Flexbox**:
  - Uso de `flexDirection: 'row'`, `justifyContent: 'space-between'` y `alignItems: 'center'` para alinear en los extremos opuestos el precio monetario a la izquierda y el botón interactivo de compra (`Pressable`) a la derecha.
- **Profundidad y sombras multiplataforma**:
  - Implementación de sombras físicas con `elevation: 2` para Android y propiedades compuestas `shadow*` para iOS sobre un fondo neutro de contraste (`#f8fafc`).

## Respuesta a la pregunta de comprensión
¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.

**Respuesta:**  
El **nombre del producto** debe tener la **mayor jerarquía visual**, seguido muy de cerca por el **precio**, mientras que la **categoría** debe quedar en un tercer nivel jerárquico secundario o contextual.

**Justificación técnica y de experiencia de usuario (UX/UI):**
1. **Identificación inmediata y patrón de escaneo:**  
   Cuando un usuario visualiza una tarjeta de producto, su primera necesidad cognitiva es confirmar **qué artículo está viendo**. El nombre del producto confirma y da significado a la imagen de cabecera. Si destacáramos la categoría o el precio por encima del nombre, el usuario perdería el ancla de identidad del objeto. Por ello, el título debe contar con el mayor tamaño tipográfico (24px) y ocupar una posición central.
2. **El precio como factor decisivo de conversión:**  
   Una vez que el usuario sabe qué producto es, su siguiente pregunta automática es su coste (*"¿cuánto vale?"*). El precio es el dato que valida la intención de compra. Debe tener un contraste visual muy nítido, tipografía gruesa (`700Bold`) y situarse en proximidad directa con el botón de acción (`"AÑADIR"`), permitiendo una decisión ágil sin esfuerzo de búsqueda.
3. **La categoría como dato contextual/secundario:**  
   La categoría (`"AUDIO"`) aporta contexto de clasificación en el catálogo, pero rara vez es el factor que define la compra de ese artículo individual. Por esta razón, debe mostrarse de manera discreta (tamaño más reducido o estilo sobrio) para organizar la información sin robar la atención que merecen el nombre y el precio.

## Qué he modificado
- **Punto de entrada y archivos del proyecto**:
  - Se crearon y alinearon tanto `App.tsx` en la raíz de `EJERCICIO-05` como `src/app/index.tsx`, ofreciendo compatibilidad completa tanto con la arquitectura tradicional de React Native como con Expo Router.
- **Estructura y tarjeta contenedora**:
  - Pantalla centrada (`justifyContent: 'center'`) sobre un fondo gris neutro moderno (`#f8fafc`).
  - Tarjeta blanca con esquinas redondeadas (`borderRadius: 20`), recorte estricto de desbordamiento (`overflow: 'hidden'`) y sombras suaves combinadas para Android (`elevation: 2`) e iOS (`shadowColor`, `shadowOpacity`, etc.).
- **Imagen de cabecera**:
  - Componente `Image` con fuente remota (`https://picsum.photos/600/400`) ocupando todo el ancho de la tarjeta (`width: '100%'`) con una altura de 220px.
- **Cuerpo de información (`content`)**:
  - Categoría con texto `"AUDIO"` en color azul (`#2563eb`) y tipografía media.
  - **Modificación y reto incorporado**:
    - **Badge promocional de oferta**: `<Text style={styles.offertBadge}>OFERTA</Text>` con fondo rojizo suave (`#fdcece`), texto en rojo carmesí (`#D00000`), bordes tipo píldora (`borderRadius: 100`) y tipografía en negrita.
    - **Valoración con estrellas**: `<Text style={styles.rating}>⭐ 4.8</Text>` en tipografía media de 18px para aportar prueba social de satisfacción del cliente.
  - Título principal `"Auriculares Wireless"` con `fontSize: 24` y fuente `GoogleSansFlex_500Medium`.
- **Fila inferior de precio y compra (`bottom`)**:
  - Disposición horizontal con `justifyContent: 'space-between'` y `alignItems: 'center'`.
  - Precio `"89,99 €"` con peso `GoogleSansFlex_700Bold` y tamaño 20px.
  - Botón táctil `"AÑADIR"` con `Pressable`, fondo azul intenso (`#477cefff`), bordes redondeados tipo píldora (`borderRadius: 100`), padding equilibrado y texto blanco en negrita.

## Resultado
La interfaz muestra una tarjeta de producto moderna, comercial y con acabado profesional:
1. **Cabecera visual atractiva**: Fotografía del producto integrada a sangre en la parte superior con sus esquinas perfectamente recortadas siguiendo la curvatura de la tarjeta.
2. **Jerarquía visual equilibrada**: La categoría y el distintivo `"OFERTA"` presentan el contexto y la promoción, mientras que el nombre `"Auriculares Wireless"` destaca como protagonista indiscutible, respaldado por la valoración `"⭐ 4.8"`.
3. **Pie de acción funcional**: En la parte inferior, el precio en negrita a la izquierda y el botón de compra a la derecha cierran la tarjeta con una llamada a la acción clara, cómoda y de alto impacto visual.
