# 🚀 Espacio Educa - Plataforma Web

Repositorio oficial de la página web institucional de **Espacio Educa**.
Este proyecto está construido con **React + Vite** y sigue la identidad visual definida en el Brandboard 2024.

## 🛠 Tecnología

* **Core:** React 18
* **Build Tool:** Vite
* **Estilos:** Tailwind CSS v3 (Configurado con paleta oficial)
* **Router:** React Router Dom
* **Iconos:** Lucide React
* **Gestor de Paquetes:** pnpm

## 📋 Requisitos Previos

* Node.js (v18 o superior)
* pnpm (`npm install -g pnpm`)

## 🚀 Instalación y Desarrollo

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/EspacioEduca/espacio-educa-web.git](https://github.com/EspacioEduca/espacio-educa-web.git)
    cd espacio-educa-web
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Iniciar servidor local:**
    ```bash
    pnpm dev
    ```
    La aplicación correrá en `http://localhost:5173`.

## 📂 Estructura del Proyecto (SOLID)

* `/src/assets`: Imágenes, logos y fuentes estáticas.
* `/src/components/ui`: Componentes atómicos reutilizables (Botones, Inputs).
* `/src/components/layout`: Estructuras mayores (Navbar, Footer).
* `/src/data`: Archivos JSON que alimentan el contenido (KPIs, Programas). **Editar aquí para cambiar textos.**
* `/src/pages`: Vistas completas de la aplicación.

## 🌍 Flujo de Despliegue (Deployment)

Actualmente utilizamos **GitHub Pages** como entorno de desarrollo/visualización.

Para desplegar la versión actual a GitHub Pages:

```bash
pnpm run deploy

Esto compilará el proyecto y lo subirá automáticamente a la rama gh-pages.

Espacio Educa - Transformando el futuro de jóvenes en Venezuela.