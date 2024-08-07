# Reto 01 - PICA
## Descripción
Este repositorio contiene el código para el proyecto "Reto 01" de la clase PICA. El proyecto consiste en un microservicio Express con una base de datos MySQL, gestionado mediante Docker.

## Entregables
- Código fuente en un repositorio Git.
- Archivo Dockerfile en la raíz del repositorio para construir la imagen del microservicio.
- Instrucciones en el README para compilar y desplegar el contenedor.
- Colección de Postman para probar el microservicio.

## Estructura del Proyecto
- `/`: Código fuente del microservicio.
- `Dockerfile`: Archivo para construir la imagen Docker.
- `docker-compose.yml`: Archivo para definir y ejecutar el contenedor Docker.
- `.env`: Archivo con variables de entorno para la configuración del microservicio.
- `init.sql`: Script SQL para inicializar la base de datos.
- `collection.json`: Colección de Postman para probar el API.

## Requisitos
- Docker
- Docker Compose
- Node.js (si quieres ejecutar el microservicio localmente sin Docker)

## Configuración del Entorno
1. Clona el repositorio:

```bash
git clone https://github.com/camilovegag/PICA.git
cd PICA
```

2. Crea un archivo .env en la raíz del proyecto, puedes guiarte del `.env.example` o utilizar la siguiente configuración:

```sh
DB_HOST=mysql_db
DB_USER=myappuser
DB_PASSWORD=myapppassword
DB_NAME=myapp
DB_PORT=3306
PORT=3000
```
- Asegúrate de que los valores correspondan con los configurados en docker-compose.yml.
- `DB_HOST` debe ser el nombre del servicio, en este caso `mysql_db`.

## Construir y Ejecutar el Contenedor
1. Construir la imagen Docker:
```bash
docker build -t node_express_app .
```
2. Iniciar los contenedores con Docker Compose:
```bash
docker-compose up -d
```
Esto levantará los contenedores para el microservicio (node_app) y la base de datos (mysql_db).

3. Verificar los logs del microservicio:

```bash
docker logs -f node_express_app
```
- `-f`: Esta opción se usa para seguir los logs en tiempo real.

## API Endpoints


### Obtener Usuarios
- Método: `GET`
- Ruta: `/api/users`

##### Respuesta:
```json
[
  {
    "id": 1,
    "email": "usuario@example.com",
    "nombre": "Nombre",
    "apellido": "Apellido",
    "fecha": "YYYY-MM-DD"
  },
  {
    "id": 2,
    "email": "usuario@example.com",
    "nombre": "Nombre",
    "apellido": "Apellido",
    "fecha": "YYYY-MM-DD"
  },
]
```

### Obtener Usuario por ID
- Método: `GET`
- Ruta: `/api/users/:id`
- Parámetros de URL: `id` (ID del usuario)

##### Respuesta:
```json
{
  "id": 1,
  "email": "usuario@example.com",
  "nombre": "Nombre",
  "apellido": "Apellido",
  "fecha": "YYYY-MM-DD"
}
```

### Crear Usuario

- Método: `POST`
- Ruta: `/api/users`
#####  Cuerpo de la Solicitud:

```json
{
  "email": "usuario@example.com",
  "nombre": "Nombre",
  "apellido": "Apellido",
  "fecha": "YYYY-MM-DD"
}
```
##### Respuesta:

```json
{
  "id": 1,
  "message": "User created successfully"
}
```

### Actualizar Usuario

- Método: `PUT`
- Ruta: `/api/users/:id`
- Parámetros de URL: `id` (ID del usuario)

#####  Cuerpo de la Solicitud:
JSON con los campos a actualizar. Todos los campos son opcionales.
```json
{
  "email": "usuario@example.com",
  "nombre": "Nombre",
  "apellido": "Apellido",
  "fecha": "YYYY-MM-DD"
}
```
##### Respuesta:

```json
{
  "id": 1,
  "message": "User updated successfully"
}
```

## Probar con Insomnia/Postman
1. Importa la colección:
- Abre Insomnia/Postman.
- Ve a "File" -> "Import" y selecciona el archivo `collection.json.`
  
2. Ejecuta las peticiones para probar el microservicio.
- La colección contiene las peticiones para crear y obtener usuarios.

## Notas Adicionales
- Asegúrate de que Docker y Docker Compose estén instalados y funcionando correctamente en tu máquina.
- Si necesitas cambiar la configuración de la base de datos, actualiza el archivo .env y reinicia los contenedores.

## Contribuciones
Para contribuir a este proyecto, por favor realiza un fork del repositorio y abre un pull request con tus cambios.