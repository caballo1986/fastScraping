# FastScraping - API de Scraping en JavaScript

FastScraping es una API de scraping en JavaScript que utiliza Puppeteer para extraer datos de sitios web de forma rápida y sencilla. Puedes utilizar esta API como punto de partida para tus proyectos de scraping.

## Requisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local:

       git clone https://github.com/caballo1986/fastScraping.git

2. Navega al directorio del proyecto:

        cd fastScraping

3. Instala las dependencias:

        npm install

4. Para ejecutarlo:

        npm index.js

## Uso

FastScraping proporciona varias funciones para realizar tareas de scraping en sitios web. Puedes utilizar las siguientes funciones según tus necesidades:

1. openWebPage: Abre una página web en un navegador controlado por Puppeteer.

2. captureScreenshot: Captura una captura de pantalla de una página web y la guarda en un archivo.

3. nagivateWebPage: Navega a través de una página web interactuando con elementos, como hacer clic en enlaces.

4. getDataFromWebPage: Extrae datos específicos de una página web, como el título, la descripción y más.

5. handleDynamicWebPage: Maneja una página web con contenido dinámico, como scraping de citas con autores y etiquetas.

Para usar cualquiera de estas funciones, simplemente descomenta la función relevante en el archivo index.js y ejecuta la aplicación con npm start.

## Configuración Personalizada

Puedes personalizar la configuración de scraping y las URLs editando el archivo index.js. Ajusta las opciones según tus necesidades específicas.

    // Ejemplo de configuración personalizada
    const url = 'https://www.example.com';
    const selector = 'h1';

## Contribuir

Si deseas contribuir a este proyecto, ¡estamos abiertos a sugerencias y contribuciones! Siéntete libre de crear un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
  

