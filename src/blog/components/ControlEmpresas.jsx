import React from 'react'

export const ControlEmpresas = () => {
  return (
    <>
        <br />
                <br />
                <div className='container'>
                    <div className="clearfix">
                        <h2>Control de empresas (2023)</h2>
                        <img src="./src/assets/empresas.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                        <p>
                        El siguiente proyecto consiste en una API desarrollada en NodeJS con conexión a mongoDB, la cual lleva el control de una empresa, esto quiere decir que una empresa se puede registrar, loggear, llevar el control de sus sucursales, etc. La empresa solo puede editar y eliminarse a si misma, al igual que sus sucursales.
                        </p>

                        <p>
                            Link del repositorio en GitHub:
                        </p>

                        <a href="https://github.com/ocorzo-2021084/laboratorio2-control-empresas">
                        https://github.com/ocorzo-2021084/laboratorio2-control-empresas
                        </a>
                    </div>
                </div>
                <br />
    </>
  )
}
