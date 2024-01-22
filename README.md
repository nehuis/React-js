# Caran Autopartes

## Proyecto realizado con React JS

### Alumno: Nehuel Caraballo

**[Perfil de LinkedIn](https://www.linkedin.com/in/nehuel-caraballo-234a9222a/)**

---

## E-commerce para venta de autopartes

Caran Autopartes es un sitio web ficticio, en el cual, se venden productos varios, desde cadenas para motos, hasta barras antivuelcos para camionetas. La idea nace de mi hobby y fuí capaz de plasmarlo en este proyecto a medida que iba aprendiendo a utilizar React JS y Chakra ui (una librería de diseños).
A continuación, se detallará punto por punto el funcionamiento del mismo.

## Estructura básica del sitio web

Al entrar al proyecto, se podrá ver la navbar. En la misma, se ubica el logo de la empresa, un botón, que al presionarlo despliega una lista con las distintas categorías. Al seleccionar cualquiera de estas, mediante un filtrado por categoría, se muestran los productos relacionados con la misma, y por último, el carrito con su CartWidget.
Debajo, se verá un loader, que desaparece en cuanto la información de los productos llegue.
Cada producto tiene su respectiva imágen, junto con el botón "Ver detalle". Cuando se apreta este botón, se hará otro filtrado, pero esta vez por ID, de esta forma, se mostrará la información específica del producto seleccionado.

## ¿Cómo realizar una compra?

Seleccionamos un producto cualquiera y presionamos "Ver detalle". Luego, agregamos la cantidad deseada al carrito mediante el contador, y nos dirigimos a este. Al entrar al carrito, presionamos el botón "Comprar". Al hacer esto, se nos redirigirá al formulario de compra, el cual debemos completar para que la compra se efectue. Cuando terminemos de completar, enviamos el formulario y, automáticamente, saldrá un cartél diciendo que la compra fue realizada con éxito. En ese mismo cartél se nos dará el ID de compra, que a la vez, se almacena en la base de datos con la información del producto y del cliente.

## Funcionamiento del carrito

Si nos dirigimos al carrito mientras está vacío, por medio de una técnica de rendering, se mostrará un mensaje avisando que no hay productos, y al lado, habrá un botón, que al presionarlo, nos llevará al catálogo para iniciar la compra.
Cuando el carrito tenga productos, se verá el desglose de estos, junto con un botón para eliminar productos y otro para finalizar la compra.
