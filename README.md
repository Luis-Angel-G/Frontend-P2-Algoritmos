# Sistema de Recomendaciones de Videojuegos (Frontend)

Este proyecto es el **frontend** de un sistema de recomendaciones de videojuegos, desarrollado en React y Vite. El frontend se conecta a un backend externo mediante una API REST. **No es necesario tener acceso al código interno del backend, solo que esté disponible y funcionando.**

## Requisitos de Software

- **Node.js** (versión 18 o superior recomendada)
- **npm** (incluido con Node.js)

## Instalación

### 1. Clonar el repositorio

```bash
# Clona este repositorio y entra a la carpeta del frontend
 git clone <URL_DEL_REPOSITORIO>
 cd Frontend-P2-Algoritmos
```

### 2. Instalar dependencias

```bash
npm install
```

## Configuración de la URL del Backend

El frontend está configurado para comunicarse con un backend en `http://127.0.0.1:5050` por defecto. Si el backend se encuentra en otra dirección o puerto, debes actualizar las URLs en los archivos del frontend donde se hacen las peticiones (por ejemplo, en los archivos dentro de `src/paginas/`).

## Ejecución del Frontend

```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Uso del Sistema de Recomendaciones

1. **Registro e inicio de sesión:**
   - Crea una cuenta o inicia sesión con tus credenciales.
2. **Editar perfil:**
   - Accede a la sección de perfil para seleccionar tus juegos favoritos, jugados, interesados y no gustados.
   - Guarda los cambios para actualizar tus preferencias.
3. **Ver recomendaciones:**
   - Dirígete a la sección de recomendaciones para ver juegos sugeridos según tus preferencias.

## Requisitos de la Computadora

- Sistema operativo: Windows, macOS o Linux
- Node.js instalado
- Navegador web moderno (Chrome, Firefox, Edge, etc.)
- Conexión a internet para descargar dependencias y acceder al backend

## Notas adicionales

- **El backend debe estar disponible y accesible** en la URL configurada para que el sistema funcione correctamente.
- Si cambias la URL del backend, recuerda actualizar todas las referencias en el código fuente del frontend.

---

Para dudas o problemas, consulta la documentación del repositorio o contacta al equipo de desarrollo.
