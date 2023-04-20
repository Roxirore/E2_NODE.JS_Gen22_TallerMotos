Semana 2:
Temas:
 Middlewares
 Express-validators
 Error handling
 Variables de entorno
 Relaciones
Basado en el ejercicio de la semana pasada, nuestro senior developer nos hizo el siguiente comentario:
“Muy buen trabajo con tu solución de la semana pasada, estuve revisando tu código y creo que podemos optimizarlo al
- crear middlewares para validar si los usuarios existen o no, ya que esa lógica se puede reutilizar.
- Debemos actualizar los modelos, te adjunto una imagen para que veas los cambios que hay que realizar, y hay que establecer una relación entre estos 2 modelos, recuerda que un usuario puede tener muchos servicios (repairs) y un servicio le pertenece a un usuario.
- Nuestros empleados también me comentaron que no hay una validación muy eficiente a la hora de levantar servicio o al crear usuarios, debemos implementar una mejor validación, creo que había escuchado de express-validators
- Y debemos implementar una mejor manera para el manejo de errores, al menos para facilitar el que podamos enviar y leer los errores.
- También nuestros empleados nos pidieron lo siguiente, que al buscar los servicios pendientes y los completados, podemos adjuntar la información del usuario que solicito este servicio.
- Antes de que se me olvide, asegúrate de poner nuestras credenciales de nuestra base de datos en un archivo de variables de entorno, pero estoy seguro que ya hiciste eso.”

Se deben crear 2 middlewares que cumplan con los especificado:
 Validar que el usuario existe dado un ID, en caso de que no, enviar mensaje de error
 Validar que un servicio pendiente (status pending) exista, en caso de que no, enviar mensaje de error

Implementa los siguientes cambios en los modelos, y establece la relación entre ambos


Instala express-validator y úsalo para validar los siguientes campos antes de crear un usuario o servicio:

MODELO: Users CAMPOS: Name, email, password
MODELO: Repairs CAMPOS: Date, motorsNumber, description
Instalar dotenv y aplicarlo para usar variables de entorno para nuestras credenciales de nuestra base de datos.
Utilizar lo visto para aplicar error handling en nuestro proyecto (catchAsync, globalErrorHandler y AppError) y
optimizar nuestro código.







Semana 3:
Temas:
 Encriptar contraseñas
 JWT
 Niveles de acceso
 Enviar JWT
“Hola de nuevo, vimos que haz hecho un buen trabajo con las validaciones y las relaciones entre los modelos, para que
esa parte ya quedo lista por el momento. Ahora debemos asegurarnos que nuestros usuarios se sientan seguros al tener
una cuenta con nosotros.
Por favor, asegúrate de encriptar las contraseñas de los usuarios, como ya sabrás, estas no pueden ser contraseñas
planas, debemos hacerlas ilegibles para cualquier usuario que quiera robarnos nuestra información.
Junto con las contraseñas, por favor implementa un endpoints para que el usuario tenga que iniciar sesión, y regrésale
un JWT para que pueda acceder a nuestros demás endpoints, solo los usuarios autenticados pueden hacer uso de
nuestra app.
Junto con eso, implementa un middleware para validar el rol del usuario, ya que los empleados de nuestra compañía
deberían ser los únicos para realizar ciertas acciones en la app, mas adelante te especifico los endpoints que necesito que
protejas.
También, implementa otro middleware para asegurarte que para editar o deshabilitar una cuenta de un usuario,
únicamente el dueño de esa cuenta puede hacer y no un tercero, ejemplo, usuario 1 solo puede editar o deshabilitar su
cuenta, pero usuario 2 no puede editar o deshabilitar la cuenta del usuario 1 o de cualquier otro excepto la suya.
Por último, el equipo de front-end necesitan que los ayudes a implementar estas nuevas cosas, es decir, les podrías
ayudar a que se envié el JWT de tu back.”
Instala bcrypt para encriptar las contraseñas
Implementa el siguiente endpoint

/api/v1/users
HTTP VERB: POST
URL: /login 
Descripción: Recibir por req.body (email, password), y validar que los datos sean validos

Este endpoint debe regresar un JWT con el id del usuario como payload, posteriormente utilizarlo para validar la
sesión del usuario.
Los siguientes endpoints deben ser protegidos para que únicamente el usuario con rol “employee” pueda hacer
peticiones a estos:
