# challenge-backend-nodejs
API para explorar el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en que películas estos participaron.

## Configuracion

1. Clonar el proyecto en tu maquina local.
```sh
$ git clone https://github.com/jairosoto05/challenge-backend-nodejs.git
```
 
2. Entrar a la carpeta del proyecto.
```sh 
$ cd challenge-backend-nodejs
```
 
3. Instalar las dependencias y módulos.
```sh
$ npm install
```

4. Configurar la conexion de la base de datos en config/config.js y config/database.js o en el archivo .env.  
  
6. Crear base de datos.
```sh
$ npx sequelize-cli db:create
```

6. Crear tablas en la base de datos.
```sh
$ npx sequelize-cli db:migrate
```

7. Insertar datos de prueba en la base de datos.
```sh
$ npx sequelize-cli db:seed:all
```



## Uso

```sh
$ npm run dev
```
Esto iniciara el servidor en el puerto 4000.

## Endpoints

1. Registrar usuario.
```http://localhost:4000/auth/register```

![register](https://user-images.githubusercontent.com/61017759/166404997-e92b6da7-4cf3-4fe3-939a-734641069daa.png)


2. Iniciar sesión para obtener token.
```http://localhost:4000/auth/login```

![login](https://user-images.githubusercontent.com/61017759/166405110-08e5de09-2d67-4b6a-a77a-1f2149693a07.png)

ponemos el token en Bearer

![token](https://user-images.githubusercontent.com/61017759/166406982-73a5e22d-5634-4cda-a3b1-6b6251545d69.png)

3. Crear personaje.
```http://localhost:4000/characters```

![character-create](https://user-images.githubusercontent.com/61017759/166407200-875b9b6f-975a-4651-867f-0e82cb6f69b8.png)

4. Obtener un personaje.
```http://localhost:4000/characters/<characterId>```

![character-get](https://user-images.githubusercontent.com/61017759/166407499-3e7e7cac-e765-4376-aa58-3ec6e0d2e1f2.png)

5. Buscar personajes.
```http://localhost:4000/characters```

![character-search](https://user-images.githubusercontent.com/61017759/166407748-cf128303-3f0f-4c37-a07a-cd274e787269.png)

6. Obtener todos los personaje.
```http://localhost:4000/characters```

![character-all](https://user-images.githubusercontent.com/61017759/166409161-0510c895-e1a5-40c8-939d-2bd779602a65.png)

7. Crear película.
```http://localhost:4000/movies```

![movie-create](https://user-images.githubusercontent.com/61017759/166408437-bd034751-63e6-4fa2-8e90-c0ae23de4b40.png)

8. Obtener una película.
```http://localhost:4000/movies/<movieId>```

![movie-get](https://user-images.githubusercontent.com/61017759/166408619-128323d8-6fb3-4919-9225-64ac293143f6.png)

9.  buscar películas.
```http://localhost:4000/movies/```

![movie-search](https://user-images.githubusercontent.com/61017759/166408900-55e5bd22-02b2-4267-ba8d-310b85a25af7.png)

10. Obtener todas las película.
```http://localhost:4000/movies```

![movie-all](https://user-images.githubusercontent.com/61017759/166409364-b43f2d43-9f4e-4418-ba85-d297c3f4fd84.png)
