# Título del Proyecto

Rick and Morty Challenge

## Comenzando 🚀

Primero que todo comentar los desafíos propuestos.
1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)


### Pre-requisitos 📋

El programa se realizó con NodeJs, por lo que es necesario tener instalado npm y node en su ordenador.

### Instalación 🔧

Luego de tener npm y node, se deben instalar las dependencias utilizadas en este programa, por lo que deberá dirigirse a la raiz del proyecto con la terminal,
y ejecutar el comando "npm install".

con esto el programa está listo para su ejecucion.

## Ejecutando las pruebas ⚙️

Se realizaron pruebas unitarias a las partes principales del programa.
a los servicios de conexión a la api y a los controladores que resolvían la lógica.

Para ejecutar todos los test debe ingresar en la raiz del proyecto y con la terminal ejecutar "npm test"
o bien si quiere ejecutar cada archivo por separado, debe escribir:
-"npm test controllers.test"
-"npm test services.test"


## Despliegue 📦

Para ejecutar el proyecto en si debe ingresar en la consola "npm start".

Se inicia el servidor y se puede probar con las siguientes url
(https://localhost:8080)

//charCounter controller
router.get('/getLocations', charCounter.controller.getCountLocations);
router.get('/getCharacters', charCounter.controller.getCountCharacter);
router.get('/getEpisodes', charCounter.controller.getCountEpisode);

//episodeLocation controller
router.get('/episodeLocation', episodeLocation.eLocation);

las respuestas de los desafíos aparece por consola.

## Construido con 🛠️

* [node](https://nodejs.dev/) - El framework web usado

## Autores ✒️

* **Eduardo Fuentes**  - [eduardo732](https://github.com/eduardo732) - (https://www.linkedin.com/in/eduardofuentesreyes/)

