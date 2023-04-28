import React from 'react'

export const ApiVentas = () => {
    return (
        <>
            <br />
            <br />
            <div className='container'>
                <div className="clearfix">
                    <h2>API control de ventas Online (2023)</h2>
                    <img src="./src/assets/ventas.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                    <p>
                        Esta Api fue desarrollada en NodeJS con conexión a mongoDB, el uso de la API es muy sencillo. Consiste en una API para el control de una tienda online, existen dos tipos de roles, el admin y el user, el admin puede crear categorias, productos, usuarios, facturas etc.
                    </p>

                    <p>
                        Mientras que el usuario puede ver los productos más vendidos, los productos agotados y  buscar los productos por categoría, al igual que puede comprar productos, añadir productos a su carrito de compras, recibir la factura de su compra, editar su usuario, loggearse, eliminar su usuario y cerrar sesión.
                    </p>

                    <p>
                        Link del repositorio en GitHub:
                    </p>

                    <a href="https://github.com/ocorzo-2021084/proyectoBim1-api-venta-online">
                        https://github.com/ocorzo-2021084/proyectoBim1-api-venta-online
                    </a>
                </div>
            </div>
            <br />
        </>
    )
}
