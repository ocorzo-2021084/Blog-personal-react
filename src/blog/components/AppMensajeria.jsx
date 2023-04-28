import React from 'react'

export const AppMensajeria = () => {
    return (
        <>
            <br />
            <br />
            <div className='container'>
                <div className="clearfix">
                    <h2>App de mensajería con sockets (2023)</h2>
                    <img src="./src/assets/sockets.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                    <p>
                        Este proyecto consiste en una app de mensajería creado utilizando las tecnologías de NodeJS y sockets. El usuario puede loggearse y empezar un chat grupal con distintas personas que también estén conectadas en ese momento.
                    </p>

                    <p>
                    PD: al día de hoy este proyecto aún se encuentra en desarrollo.
                    </p>

                    <p>
                        Link del repositorio en GitHub:
                    </p>

                    <a href="https://github.com/ocorzo-2021084/app-mensajeria-corzo-message">
                    https://github.com/ocorzo-2021084/app-mensajeria-corzo-message
                    </a>
                </div>
            </div>
            <br />
        </>
    )
}
