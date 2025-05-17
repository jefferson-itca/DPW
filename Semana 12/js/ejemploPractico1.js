const productos =[
    {nombre: "Laptop", precio: 1200, stock:5},
    {nombre: "Mouse", precio: 25, stock:30},
    {nombre: "Teclado", precio: 50, stock:25}
];

const mostrarProductos = ({nombre, precio, stock})=>{
    console.log(`Producto: ${nombre}`);
    console.log(`Precio: $${precio}`);
    console.log(`Stock: ${stock} unidades`);
    console.log('---------------------------');
}

for (let index = 0; index < productos.length; index++) {
    mostrarProductos(productos[index])
}