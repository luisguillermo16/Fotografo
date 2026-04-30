# Despliegue en Vercel - Fotógrafo en Cartagena

Este proyecto está configurado para un despliegue sencillo en Vercel.

## Pasos para desplegar:

1.  **Subir a GitHub:** Asegúrate de que todos los cambios estén en tu repositorio de GitHub.
2.  **Importar en Vercel:**
    *   Ve a [vercel.com](https://vercel.com).
    *   Haz clic en **"Add New"** > **"Project"**.
    *   Importa tu repositorio `fotografo`.
3.  **Configuración del Proyecto:**
    *   **Framework Preset:** Next.js (se detectará automáticamente).
    *   **Root Directory:** `./` (o la carpeta raíz del proyecto).
    *   **Build Command:** `next build`
    *   **Output Directory:** `.next`
4.  **Variables de Entorno:**
    *   Si en el futuro añades servicios como Resend o bases de datos, añade las variables en la pestaña "Environment Variables" de Vercel.

## Archivos creados para Vercel:

*   `vercel.json`: Configuración específica para el despliegue (regiones, limpieza de URLs).
*   `.gitignore`: Asegura que no se suban archivos innecesarios (`node_modules`, `.next`, etc.).

## Notas sobre el Build:

Si experimentas errores de "Invariant: Expected workStore to be initialized", es un bug conocido en algunas versiones experimentales de Next.js (v16). Vercel suele manejar esto mejor, pero si persiste, podrías considerar volver a una versión estable (v15).

---
*Desplegado con ❤️ por Antigravity*
