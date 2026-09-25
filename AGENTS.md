# Reglas del Asistente y Flujo de Trabajo Git

## Commits y Push Automáticos
Al completar con éxito cualquier tarea, requerimiento, refactorización o solución a un problema solicitado por el usuario:
1. **Verificar el estado del repositorio**:
   - Comprobar los archivos modificados (`git status`).
   - Asegurarse de que no se incluyan archivos temporales, dependencias (`node_modules/`) ni cachés (`.expo/`, etc.), respetando siempre `.gitignore`.
2. **Indexar y crear el commit**:
   - Añadir los cambios relevantes.
   - Generar un mensaje de commit claro y conciso siguiendo el estándar **Conventional Commits**:
     - `feat: ...` para nuevas funcionalidades o pantallas.
     - `fix: ...` para corrección de bugs o errores.
     - `refactor: ...` para refactorizaciones o mejoras de código.
     - `docs: ...` para cambios en documentación o README.
     - `chore: ...` para configuraciones, dependencias o tareas de mantenimiento.
3. **Subir cambios al repositorio remoto**:
   - Ejecutar `git push` para sincronizar la rama actual con el repositorio remoto de GitHub de forma automática.
4. **Notificación al usuario**:
   - Indicar brevemente al usuario en la respuesta final el commit realizado, el mensaje asignado, su hash y la confirmación del push a GitHub.

## Arquitectura Expo Router vs App.tsx
- Este repositorio utiliza exclusivamente la arquitectura de **Expo Router** (`src/app/index.tsx`, `src/app/_layout.tsx`, etc.).
- **REGLA ESTRICTA**: Queda terminantemente PROHIBIDO crear, modificar o mantener archivos `App.tsx` en la raíz de cualquier ejercicio, incluso si el texto genérico de la rúbrica o enunciado menciona `App.tsx`. Todo el código debe residir única y exclusivamente en `src/app/index.tsx`, a menos que el usuario lo solicite con confirmación expresa.
