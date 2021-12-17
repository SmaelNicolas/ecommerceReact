# E-commerce - Smael Nicolas.

## Frameworks , Libraries and tools with Versions

[![Node](https://img.shields.io/badge/node-%2014.17.0-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![Node](https://img.shields.io/badge/npm-%206.14.13-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React](https://img.shields.io/badge/react-%2017.0.2-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React-Dom](https://img.shields.io/badge/react--dom-%5E17.0.2-success)](https://reactjs.org/docs/react-dom.html)

[![React-Icons](https://img.shields.io/badge/react--icons-%5E4.3.1-success)](https://react-icons.github.io/react-icons/)

[![React-Router](https://img.shields.io/badge/react--router--dom-%5E6.0.2-success)](https://www.w3schools.com/react/react_router.asp)

[![Firebase](https://img.shields.io/badge/firebase-%5E8.9.1-success)](https://firebase.google.com/)

[![JS](https://img.shields.io/badge/JavaScript-ES2015-success)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![CSS](https://img.shields.io/badge/CSS-success)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![Gh-Pages](https://img.shields.io/badge/gh--pages-latest-success)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## COMANDOS

Create a new React app
`npx create-react-app name`

Develop mode
` npm start`

React Router Dom
`npm install react-router-dom`

React Icons
`npm install react-icons --save`

Firebase v 8.9.1
`npm install firebase@8.9.1`

## Descripcion

Proyecto ecommerce realizado en React , donde se pueden visualizar productos almacenados en Firebase y generar una orden de compra.

### Home y Categorias

La barra de navegacion proveera las rutas a todas las secciones de la pagina. El logo al Home. La seccion de categorias , cada una a su nombre respectivamente. El carrito al listado de productos a comprar. Y Orders a la seccion para consultar el numero de orden generado.

En la home page se encuentra todos distribuidos en paginas de 4 productos cada una. las cuales se pueden recorrer con los botones prev y next.
Tambien se pueden consultar a traves de las categorias Keyboards , Mosues, Pads y Headsets , donde tambien se muestran por paginas.

### Productos

Se puede comprar cada producto desde el home, categorias o desde su descripcion.

El total de cada producto seleccionado para comprar depende de su stock. No es posible elegir cantidades menores-iguales a 0 o mayores a la cantidad de stock del producto. La aplicacion avisara del error.

Una vez seleccionada una cantidad valida y presionado el boton del carrito del producto (Boton comprar) , se mostrara un mensaje con la informacion del producto, y luego se modificaran las unidades y valor total de la compra. Asi con cada producto que se sume al Carrito.

### Carrito

La seccion carrito dentro del navbar contiene Informacion de la cantidad y precio total de los productos a comprar. Haciendo un hover sobre la misma , se puede ver el detalle de todos los productos, la opcion de vaciar y comprar.

La seccion cart mostrara el detalle completo de la compra, y tambien dara la opcion de poder eliminar algun producto o todos.
Ademas , en esta seccion , se encontrara el formulario a completar.

### Formulario

Para poder generar la orden se debe completar todo el formulario. No es posible dejar secciones vacias , el numero debe ser si o si un numero y el Email debe ser el mismo que su validacion y ambos deben contener al menos @.com
Si no se cumple alguno de los requisitos se mostrara un mensaje informado cual modificar.
Si se cumplen los requisitos, se habilitara el boton de generar order. Presionado el mismo , <mostrara nuestro ID de orden y la opcion de copiarlo junto con un boton al Home. El orden Id lo necesitaremos para poder consultar en cualquier momento los productos y los totales.

### Orders

Seccion destinada para consultar a la base de datos el ID ingresado. Si corresponde a un ID valido mostrara la lista de los productos y sus respectivas cantidades y ademas del ID la cantidad y precio total de la compra.
Si no corresponde a un ID valido , mostrara un mensaje de error.

#### TO-DO

| Syntax                      | Description                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| Login                       | Crear un login para verificar usuarios                                                               |
| Stock                       | Comprobar el stock de cada producto previo a generar la orden(Actualmente al cargarse los productos) |
| Imgs, precios , descripcion | Modificar las imagenes por reales de la tienda y los precios.                                        |
| Favoritos                   | Añadir una lista de favoritos generada por cada usuario. (Asociada al Login)                         |
| Local Storage               | Guardan en ls todos los datos de inicio de sesion, ordenes y carrito.                                |
