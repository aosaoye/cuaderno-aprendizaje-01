# Ejercicio 09 - App de Finanzas y Movimientos

## Qué he aprendido
- **Composición de interfaces financieras móviles**:
  - Estructuración de pantallas complejas con múltiples niveles de jerarquía visual: saludo y perfil de usuario, tarjeta de débito/balance con métricas clave y lista detallada de movimientos recientes.
  - Aplicación de márgenes y espaciados ergonómicos (`contentContainerStyle` con `paddingTop: 60` y `paddingBottom: 40`) para respetar el área segura (*safe area*) del dispositivo en un contenedor `ScrollView`.
- **Componentes reutilizables con datos contextuales (*Data-Driven UI*)**:
  - Declaración y tipado en TypeScript del componente modular `<Movement />` con soporte para propiedades esenciales (`title`, `date`, `amount`) y propiedades de estilo avanzadas (`icon`, `bgColor`).
  - Implementación de un mapeo de metadatos por defecto (`movementMetadata`) para desacoplar el origen de datos de la lógica de presentación visual sin duplicar código.
- **Sistema de diseño limpio inspirado en Apple y el Ejercicio 08**:
  - Aplicación de "blancos cerámicos tintados" (paleta de pasteles ultra suaves con saturación del 3-5% como `#f0f4f9`, `#faf2ee`, `#edf5f1`, `#fcf8ee`) para categorizar visualmente cada tipo de gasto o ingreso.
  - Integración de iconos vectoriales escalables con `lucide-react-native` (`Bell`, `CreditCard`, `ArrowUpRight`, `ArrowRight`, `ShoppingCart`, `Coffee`, `ArrowDownLeft`, `Zap`) con trazos estilizados y proporciones balanceadas.
  - Diferenciación semántica cromática en importes financieros: verde esmeralda (`#16a34a`) para ingresos positivos y pizarra oscura (`#0f172a`) para gastos.
- **Jerarquía tipográfica moderna con Google Sans Flex**:
  - Uso de pesos tipográficos adaptados (`GoogleSansFlex_600SemiBold`, `GoogleSansFlex_500Medium`, `GoogleSansFlex_400Regular`) para guiar la atención del usuario desde el saldo disponible hasta los detalles de cada transacción.

## Qué he modificado
- **Punto de entrada exclusivo bajo Expo Router**:
  - `src/app/index.tsx`: Implementación completa de la pantalla dentro de la arquitectura de Expo Router, cumpliendo con la regla estricta de no generar ni mantener archivos `App.tsx`.
- **Cabecera de usuario**:
  - Saludo amigable `"Buenos días 👋"` en tono neutro (`#64748b`) junto al nombre del usuario en formato destacado (`fontSize: 34`, `GoogleSansFlex_500Medium`) y botón circular de notificaciones con icono `<Bell />` de Lucide.
- **Tarjeta de balance (`balanceCard`)**:
  - Acabado prémium en pizarra oscura (`#0f172a`) con esquinas redondeadas (`borderRadius: 26`), cabecera con etiqueta `"Saldo disponible"` e icono `<CreditCard />`, saldo en gran formato (`36px`, `GoogleSansFlex_600SemiBold`) y pie con número de cuenta enmascarado e indicador `<ArrowUpRight />`.
- **Listado de transacciones (`Movement`)**:
  - Rediseño de cada fila de movimiento como una tarjeta con fondo tintado suave según la categoría (supermercado, cafetería, nómina, electricidad).
  - Contenedor de icono blanco en squircle (`borderRadius: 14`) que enmarca los iconos vectoriales de Lucide.
  - Indicador de importe en seminegrita con detección automática de importes positivos y flecha de navegación `<ArrowRight />` estilizada con trazo de 2.2px.

## Resultado
La interfaz resultante ofrece una experiencia financiera móvil limpia, moderna y altamente atractiva:
1. **Estética prémium y unificada**: Comparte la misma línea visual minimalista del Ejercicio 08, combinando fondos cerámicos pasteles con esquinas redondeadas pronunciadas y sombras naturales.
2. **Iconografía contextual**: Cada movimiento (Supermercado, Cafetería, Nómina y Electricidad) se identifica al instante mediante su icono vectorial representativo de Lucide.
3. **Alto contraste y legibilidad**: La tarjeta de balance oscura actúa como ancla visual principal de la pantalla, mientras que el listado de movimientos ofrece un escaneo rápido y ordenado del historial bancario.
4. **Rendimiento nativo**: Scroll vertical suave y reactivo gestionado por `ScrollView` con fuentes vectoriales cargadas sin parpadeos visuales.
