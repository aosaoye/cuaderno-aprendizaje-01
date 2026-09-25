# Ejercicio 02 - Tarjeta de bienvenida

## Qué he aprendido
- Estructuración de layouts anidados: componer un segundo `View` que actúa como tarjeta (*card*) dentro del `View` principal de la pantalla.
- Aplicación práctica del modelo de caja:
  - `padding`: Proporciona espacio interior de respiración entre el borde de la tarjeta y sus elementos hijos.
  - `borderRadius`: Suaviza las esquinas de los contenedores para darles apariencia de tarjeta móvil moderna.
- Construcción de un botón visual primitivo sin librerías externas: componer un `View` con fondo de color (`backgroundColor`), esquinas redondeadas y centrado para envolver una etiqueta `Text` en mayúsculas (`"COMENZAR"`).
- Establecimiento de contraste visual claro entre la superficie de la pantalla (gris claro `#f1f5f9`) y la tarjeta (blanca `#ffffff` con borde suave).
- Reutilización de estilos y creación de variantes (*themes*) en React Native mediante arrays de estilos (`style={[styles.card, styles.cardVariant]}`).

## Respuesta a la pregunta de comprensión
¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?

**Respuesta:**  
Porque el **`padding`** representa el relleno **interior** dentro de los límites visuales del contenedor. Al aplicar `padding` en la tarjeta:
1. El color de fondo (`backgroundColor`) y las esquinas redondeadas (`borderRadius`) envuelven todo ese espacio interior, creando una separación uniforme y armónica entre el borde exterior de la tarjeta y su contenido.
2. Centraliza la regla de espaciado para todos los elementos interiores (título, descripción y botón), evitando que cualquiera de ellos colisione con el borde.

Si utilizáramos **`margin`**:
- El `margin` en la tarjeta solo la alejaría de los límites de la pantalla (espacio exterior), sin crear ninguna separación entre el borde de la tarjeta y sus textos.
- Si aplicáramos `margin` a cada texto de forma individual para separarlo del borde, tendríamos que repetir estilos en cada elemento hijo, haciendo el código más frágil, repetitivo y difícil de mantener.

## Qué he modificado
1. **Tarjeta oficial de la rúbrica**:
   - `View` principal como contenedor con fondo gris claro (`#f1f5f9`).
   - `View` de la tarjeta con fondo blanco (`#ffffff`), `padding: 24`, `borderRadius: 16` y borde fino (`#e2e8f0`).
   - Título (`"¡Bienvenido!"`) y descripción (`"Diseño de interfaces con React Native"`).
   - Botón visual con `View` azul (`#2563eb`) y `<Text style={styles.buttonText}>COMENZAR</Text>`.
2. **Resolución del RETO (Segunda variante de tarjeta)**:
   - Se añadió la segunda tarjeta combinando estilos (`[styles.card, styles.cardVariant]`) con una paleta de colores oscura (*Dark Slate* `#1e293b`).
   - Textos de alto contraste (`#f8fafc` y `#94a3b8`) con el mensaje personalizado `"Hi! Akkari - Aprenderás diseños chulos en mi academia"`.
   - Botón visual de acento ámbar dorado (`#f59e0b`) con texto oscuro contrastado:
     ```tsx
     <View style={[styles.button, styles.buttonVariant]}>
       <Text style={[styles.buttonText, styles.buttonTextVariant]}>
         COMENZAR
       </Text>
     </View>
     ```

## Resultado
La interfaz muestra las dos variantes de tarjeta perfectamente integradas:
1. **Variante oficial**: Tarjeta blanca limpia sobre fondo gris claro con botón azul, cumpliendo estrictamente los pasos de la rúbrica.
2. **Variante del reto**: Tarjeta oscura elegante con botón dorado/ámbar, demostrando la versatilidad de la composición de estilos y cumpliendo el reto de crear una paleta alternativa.
