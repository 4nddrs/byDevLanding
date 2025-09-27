# Landing Page for Software Company

## Descripción del Proyecto

Este proyecto consiste en una Landing Page diseñada para una mi start-up byDev. Su objetivo principal es proporcionar una interfaz moderna, atractiva y funcional que represente los servicios, el equipo y la misión de la empresa. La página está optimizada para ofrecer una experiencia de usuario fluida y accesible en diferentes dispositivos.

---

## Tecnologías Utilizadas

El proyecto está construido utilizando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Un superconjunto de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos modernos de frontend.
- **CSS**: Para el diseño y la personalización de estilos.
- **Figma**: Herramienta de diseño utilizada para la creación del prototipo visual.

---

## Arquitectura del Proyecto

El proyecto sigue una arquitectura modular y organizada para facilitar la escalabilidad y el mantenimiento. A continuación, se describen las principales carpetas y archivos:

- **public/**: Contiene recursos estáticos como íconos, imágenes y manifestos.
- **src/**: Carpeta principal del código fuente.
  - **components/**: Componentes reutilizables y específicos de la interfaz de usuario.
    - **ui/**: Componentes genéricos como botones, formularios, menús, etc.
    - **figma/**: Componentes relacionados con la integración de diseños de Figma.
  - **styles/**: Archivos CSS globales.
  - **guidelines/**: Documentación y guías internas del proyecto.
  - **App.tsx**: Punto de entrada principal de la aplicación.
  - **main.tsx**: Archivo de inicialización de React.
- **package.json**: Archivo de configuración de dependencias y scripts.
- **vite.config.ts**: Configuración de Vite para el entorno de desarrollo.

---

## Despliegue

El proyecto puede ser desplegado fácilmente en cualquier servicio de hosting compatible con aplicaciones de React. A continuación, se describen los pasos generales para el despliegue:

1. **Construcción del Proyecto**:
   Ejecuta el siguiente comando para generar los archivos estáticos optimizados:
   ```bash
   npm run build
   ```

2. **Previsualización Local**:
   Para verificar la construcción, puedes ejecutar:
   ```bash
   npm run preview
   ```

3. **Subida al Servidor**:
   Sube la carpeta `dist/` generada al servicio de hosting de tu elección (por ejemplo, Vercel, Netlify, AWS S3, etc.).

---

## Scripts Disponibles

- `npm i`: Instala las dependencias necesarias.
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera los archivos optimizados para producción.
- `npm run preview`: Previsualiza la aplicación construida localmente.


