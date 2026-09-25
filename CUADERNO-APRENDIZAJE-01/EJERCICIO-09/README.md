# Ejercicio 09 - App de Finanzas y Movimientos

## Qué he aprendido
- **Composición de interfaces financieras móviles**:
  - Estructuración de pantallas complejas con múltiples niveles de jerarquía visual: saludo y perfil de usuario, tarjeta virtual bancaria con métricas clave y lista detallada de movimientos recientes.
  - Aplicación de márgenes y espaciados ergonómicos (`contentContainerStyle` con `paddingTop: 60` y `paddingBottom: 40`) para respetar el área segura (*safe area*) del dispositivo en un contenedor `ScrollView`.
- **Diseño de tarjetas bancarias prémium (*Sanal Kart / Virtual Card*)**:
  - Implementación de gradientes lineales de alta gama mediante `expo-linear-gradient` (`colors={['#1742c7', '#0f2c96', '#060c2c']}`).
  - Composición de capas visuales: superposición de un arco circular oscuro (`cardDarkArc`) para generar volumen y curvatura orgánica.
  - Texturizado con micro-patrones vectoriales digitales mediante `react-native-svg` (`<Svg>`, `<Circle>`), simulando la matriz de datos y luz cian/índigo de las tarjetas fintech contemporáneas.
  - Jerarquía de elementos de pago: número de tarjeta enmascarado (`1234 **** **** 5678`), titular, datos de seguridad (`**/**`, `CVV ***`) y logotipo de red de pago (`VISA`).
- **Componentes reutilizables con datos contextuales (*Data-Driven UI*)**:
  - Definición de colecciones declarativas (`MOVEMENTS`) y renderizado mediante `.map()`.
  - Componente modular `<Movement />` tipado en TypeScript con paso de propiedades esenciales (`title`, `date`, `amount`) e iconografía contextual.
- **Sistema de diseño limpio inspirado en Apple y el Ejercicio 08**:
  - Aplicación de "blancos cerámicos tintados" (paleta de pasteles ultra suaves con saturación del 3-5% como `#f0f4f9`, `#faf2ee`, `#edf5f1`, `#fcf8ee`) para categorizar visualmente cada tipo de gasto o ingreso.
  - Integración de iconos vectoriales escalables con `lucide-react-native` (`SunDim`, `Bell`, `CreditCard`, `ArrowRight`, `ShoppingCart`, `Coffee`, `ArrowDownLeft`, `Zap`) con trazos estilizados y proporciones balanceadas.
  - Diferenciación semántica cromática en importes financieros: verde esmeralda (`#16a34a`) para ingresos positivos y pizarra oscura (`#0f172a`) para gastos.
- **Jerarquía tipográfica moderna con Google Sans Flex**:
  - Uso de pesos tipográficos adaptados (`GoogleSansFlex_600SemiBold`, `GoogleSansFlex_500Medium`, `GoogleSansFlex_400Regular`) para guiar la atención del usuario desde el saldo disponible hasta los detalles de cada transacción.

## Qué he modificado
- **Punto de entrada exclusivo bajo Expo Router**:
  - `src/app/index.tsx`: Implementación completa de la pantalla dentro de la arquitectura de Expo Router, cumpliendo con la regla estricta de no generar ni mantener archivos `App.tsx`.
- **Cabecera de usuario**:
  - Saludo `"Buenos días"` integrado con el icono `<SunDim />` de Lucide, nombre del usuario destacado (`fontSize: 34`, `GoogleSansFlex_500Medium`) y botón circular de notificaciones con icono `<Bell />`.
- **Saldo disponible**:
  - Bloque independiente con etiqueta `"Saldo disponible"` e importe prominente `"4.280,32 €"` en tipografía seminegrita de 34px.
- **Tarjeta bancaria virtual (*Sanal Kart*)**:
  - Réplica fiel del diseño de referencia: acabado en gradiente azul cobalto, arco oscuro en segundo plano, matriz de micro-puntos cian/índigo vía SVG, título `"SANAL KART"`, número con asteriscos, titular `"LAURA MARTÍNEZ"`, códigos `**/**` y `CVV ***`, y logotipo `"VISA"` en negrita itálica con sombra profunda multiplataforma.
- **Listado de transacciones (`Movement`)**:
  - Iteración sobre el array `MOVEMENTS` renderizando tarjetas modulares con esquinas redondeadas (`borderRadius: 22`).
  - Contenedor de icono blanco en squircle (`borderRadius: 14`) que enmarca los iconos vectoriales de Lucide según la temática del movimiento.
  - Indicador de importe con coloreado semántico verde para ingresos y flecha de navegación `<ArrowRight />` estilizada.

## Resultado
La interfaz resultante ofrece una experiencia financiera móvil limpia, moderna y altamente atractiva:
1. **Tarjeta bancaria de nivel producción**: La tarjeta Sanal Kart azul cobalto aporta un impacto visual instantáneo fiel al diseño de referencia proporcionado.
2. **Iconografía contextual y amigable**: La combinación de `SunDim`, `Bell` y los iconos de cada movimiento enriquecen la interfaz de forma limpia y coherente.
3. **Alto contraste y legibilidad**: Saldo e historial organizados con proporciones equilibradas y tipografía moderna Google Sans Flex.
4. **Rendimiento nativo**: Scroll vertical suave y reactivo gestionado por `ScrollView` con gráficos vectoriales nítidos en cualquier densidad de pantalla.
