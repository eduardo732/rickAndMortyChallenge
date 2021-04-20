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

Cabe destacar que el programa se demora al rededor de 15 segundos en funcionar, esto ya que no pude solucionar la eficiencia del consumo de la api, ya que debía leer
muchas páginas de información.


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

Para ejecutar el proyecto en si debe ingresar en la consola "node index.js".

recomiendo que para mejor lectura de las respuestas, se diriga al archivo index.js
y en la función main() commente el challenge que no desee visualizar.

las respuestas de los desafíos aparece por consola.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [node](https://nodejs.dev/) - El framework web usado

## Autores ✒️

* **Eduardo Fuentes**  - [eduardo732](https://github.com/eduardo732) - (https://www.linkedin.com/in/eduardofuentesreyes/)

