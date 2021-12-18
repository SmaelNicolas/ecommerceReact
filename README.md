# E-commerce - Smael Nicolas.

# [![CSS](https://img.shields.io/badge/Link%20a%20la%20web-blueviolet)](https://ecommerce-react-smael.netlify.app/)

# [Drag On - App con React](https://ecommerce-react-smael.netlify.app/)

## Frameworks , libraries y tools con sus versiones

[![Node](https://img.shields.io/badge/node-%2014.17.0-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![Node](https://img.shields.io/badge/npm-%206.14.13-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React](https://img.shields.io/badge/react-%2017.0.2-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React-Dom](https://img.shields.io/badge/react--dom-%5E17.0.2-success)](https://reactjs.org/docs/react-dom.html)

[![React-Icons](https://img.shields.io/badge/react--icons-%5E4.3.1-success)](https://react-icons.github.io/react-icons/)

[![React-Router](https://img.shields.io/badge/react--router--dom-%5E6.0.2-success)](https://www.w3schools.com/react/react_router.asp)

[![Firebase](https://img.shields.io/badge/firebase-%5E8.9.1-success)](https://firebase.google.com/)

[![JS](https://img.shields.io/badge/JavaScript-ES2015-success)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![CSS](https://img.shields.io/badge/CSS-success)](https://developer.mozilla.org/en-US/docs/Web/CSS)

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

Deploy
`npm run build`

## descripción

Proyecto ecommerce realizado en React , donde se pueden visualizar productos almacenados en Firebase y generar una orden de compra.

### Home y categorías

La barra de navegación proveera las rutas a todas las secciónes de la pagina. El logo al Home. La sección de categorías , cada una a su nombre respectivamente. El carrito al listado de productos a comprar. Y Orders a la sección para consultar el número de orden generado.

En la home page se encuentra todos los productos distribuidos en paginas de hasta 4 productos cada una. las cuales se pueden recorrer con los botones prev y next.
También se pueden consultar a traves de las categorías Keyboards , Mosues, Pads y Headsets , donde tambien se muestran por paginas.

### Productos

Se puede comprar cada producto desde el home, categorías o desde su descripción.

El total de cada producto seleccionado para comprar depende de su stock. No es posible elegir cantidades menores-iguales a 0 o mayores a la cantidad de stock del producto. La aplicación avisara del error.

Una vez seleccionada una cantidad valida y presionado el boton carrito dentro de cada producto (Boton comprar) , se mostrará un mensaje con la información del articulo, y luego se modificaran las unidades y valor total de la compra. Asi con cada producto que se sume al Carrito.

Cada producto tiene su id , autogenerado por firebase, el cual se puede ver en la ruta, dentro de la descripción.

### Carrito

La sección carrito dentro del navbar contiene información de la cantidad y precio total de los productos a comprar. Haciendo un hover sobre la misma , se puede ver el detalle de todos los productos, la opción de vaciar y comprar.

La sección cart mostrara el detalle completo de la compra, y también dara la opción de poder eliminar un producto especifico o todos juntos.
Ademas , en esta sección , se encontrara el formulario a completar.

### Formulario

Para poder generar la orden se debe completar todo el formulario. No es posible dejar secciónes vacias , el numero de telefono debe contener solo numeros y el Email debe ser el mismo que su validación y ambos deben contener al menos "@.com"
Si no se cumple alguno de los requisitos se mostrara un mensaje informado cual campo modificar.
Si se cumplen los requisitos, se habilitara el boton de generar order. Presionado el mismo , mostrara el ID de la orden y la opción de copiarlo junto con un boton al Home. El orden Id lo necesitaremos para poder consultar en cualquier momento los productos y los totales.

### Orders

Sección destinada para consultar a la base de datos el ID ingresado. Si corresponde a un ID valido mostrará la lista de los productos y sus respectivas cantidades y ,ademas del ID, la cantidad y precio total de la compra.
Si no corresponde a un ID valido , mostrara un mensaje de error.

#### TO-DO

| Funcionalidades             | descripción                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| Login                       | Crear un login para verificar usuarios                                                               |
| Stock                       | Comprobar el stock de cada producto previo a generar la orden(Actualmente al cargarse los productos) |
| Imgs, precios , descripción | Modificar las imagenes por reales de la tienda y los precios.                                        |
| Favoritos                   | Añadir una lista de favoritos generada por cada usuario. (Asociada al Login)                         |
| Local Storage               | Guardan en ls todos los datos de inicio de sesión, ordenes y carrito.                                |
