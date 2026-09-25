# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- **Manejo del componente `TextInput`**:
  - Introducción a la captura de datos de entrada del usuario en React Native.
  - Configuración de textos guía mediante la propiedad `placeholder` para indicar al usuario la información esperada.
  - Aplicación de seguridad en campos confidenciales con la propiedad booleana `secureTextEntry`, ocultando los caracteres de la contraseña en pantalla mediante puntos/asteriscos por privacidad.
- **Interacción y botones personalizados con `Pressable`**:
  - Uso de `Pressable` frente al componente tradicional `Button` de React Native para obtener control total sobre el estilizado, esquinas redondeadas (`borderRadius`), márgenes y layout.
- **Componentes no controlados (*Uncontrolled Components*) vs reactivos**:
  - Comprensión de cómo el widget nativo subyacente del sistema operativo gestiona de forma autónoma el buffer de texto y los eventos del teclado en pantallas de presentación visual, sin necesidad de sincronización inmediata con React.
- **Composición visual y ergonomía táctil**:
  - Centrado vertical de la pantalla (`justifyContent: 'center'`) sobre fondo blanco limpio.
  - Diseño de campos con estética tipo píldora (`borderRadius: 100`) y relleno interior (`paddingHorizontal: 18`, `paddingVertical: 14`) que maximizan la superficie de interacción táctil.
  - Jerarquía tipográfica consistente utilizando pesos diferenciados (*Bold* para títulos y botones, *Regular* para subtítulos e inputs).

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

**Respuesta:**  
En este ejercicio no necesitamos todavía `useState` porque se trata de una **pantalla de maquetación estática de interfaz (UI Mockup)** donde los campos de texto funcionan como **componentes no controlados (*uncontrolled components*)**, y la aplicación no necesita almacenar, procesar ni sincronizar los datos introducidos con el ciclo de vida de React.

**Fundamentos técnicos:**
1. **Gestión nativa del texto en el dispositivo:**  
   En React Native, el componente `<TextInput />` delega la gestión del texto directamente en el componente nativo del sistema operativo (`UITextField` en iOS y `EditText` en Android). El buffer del sistema mantiene y refleja en pantalla cada carácter tecleado por el usuario de forma autónoma sin que React tenga que intervenir.
2. **Ausencia de lógica de negocio o validación en tiempo real:**  
   El objetivo actual es maquetar el layout visual, los estilos, la tipografía y la disposición de los elementos. Al no existir validaciones dinámicas (como comprobar el formato del email o habilitar/deshabilitar el botón según la longitud de la clave) ni peticiones de autenticación a un servidor al pulsar `"INICIAR SESIÓN"`, no se requiere ningún estado reactivo.
3. **Eficiencia y prevención de renderizados innecesarios:**  
   Vincular un `useState` a cada input mediante el listener `onChangeText` obligaría a React a re-renderizar todo el componente con cada pulsación de tecla. Prescindir de él en esta fase mantiene el código más conciso, limpio y con el rendimiento nativo óptimo.

## Qué he modificado
- **Punto de entrada y archivos del proyecto**:
  - Se crearon y sincronizaron tanto `App.tsx` en la raíz de `EJERCICIO-04` como `src/app/index.tsx`, asegurando compatibilidad completa tanto con la entrega tradicional de React Native como con Expo Router.
- **Estructura y contenedor principal (`container`)**:
  - `View` envolvente con `flex: 1`, centrado vertical mediante `justifyContent: 'center'`, `padding: 28` y fondo blanco (`backgroundColor: 'white'`).
- **Encabezados y jerarquía tipográfica**:
  - Título principal `"Bienvenido"` con `fontSize: 30` y peso `GoogleSansFlex_700Bold`.
  - Subtítulo descriptivo `"Introduce tus datos para continuar"` con `fontSize: 18`, color slate neutro (`#64748b`), peso regular y márgenes de separación (`marginTop: 8`, `marginBottom: 28`).
- **Campos de formulario (`TextInput`)**:
  - Input para `"Correo electrónico"` con fondo gris suave (`#f1f5f9`), padding horizontal de 18px y vertical de 14px, bordes tipo píldora (`borderRadius: 100`), tamaño 16px y separación inferior `marginBottom: 14`.
  - Input para `"Contraseña"` con los mismos estilos ergonómicos y la propiedad `secureTextEntry` para ofuscar los caracteres.
- **Botón de acción principal (`Pressable`)**:
  - Botón tipo píldora (`borderRadius: 100`) con color azul (`#2563eb`), padding interior de 16px y margen superior `marginTop: 8`.
  - Etiqueta interior `"INICIAR SESIÓN"` centrada, en blanco y peso en negrita.
- **Enlace de registro secundario**:
  - Texto inferior `"¿No tienes cuenta? Regístrate"` centrado, color azul corporativo (`#2563eb`), `fontSize: 16` y margen superior de 20px para guiar al usuario a la acción alternativa.

## Resultado
La interfaz muestra una pantalla de acceso moderna, elegante y equilibrada:
1. **Encabezado directo**: Título `"Bienvenido"` destacado y subtítulo en tono secundario que contextualizan la acción.
2. **Inputs ergonómicos**: Dos campos de texto con diseño envolvente tipo píldora y fondos neutros que contrastan con claridad, ofreciendo privacidad en la contraseña gracias a `secureTextEntry`.
3. **Llamada a la acción visual**: Un botón azul sobresaliente con texto en mayúsculas negrita que actúa como punto focal de la pantalla.
4. **Acceso alternativo**: Un enlace inferior limpio y proporcionado para usuarios que requieran registrarse.
