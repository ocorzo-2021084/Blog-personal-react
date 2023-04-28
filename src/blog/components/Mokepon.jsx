import React from 'react'

export const Mokepon = () => {
    return (
        <>
            <br />
            <br />
            <div className='container'>
                <div className="clearfix">
                    <h2>Mokepon (2023)</h2>
                    <img src="./src/assets/mokepon2.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
                    <p>
                    Este proyecto fue el primer juego que desarrollé utilizando NodeJS, HTML y CSS. El juego consiste en un juego de batallas entre personajes llamados mokepones (no tiene relación alguna con pokemon). Hay un mapa en donde puedes moverte y si chocas con otro personaje, entrarás a un combate contra él en dónde solo uno saldrá victorioso. 
                    </p>

                    <p>
                    El juego tiene la posibilidad de ser jugado en línea usando la PC en dónde se ejecuta el juego como servidor, de esta manera puedes jugar con tus amigos y pasar el rato siempre y cuando estén usando la misma red.
                    </p>

                    <p>
                    PD: El proyecto se ejecuta con el comando "node index.js".
                    </p>

                    <p>
                        Link del repositorio en GitHub:
                    </p>

                    <a href="https://github.com/ocorzo-2021084/Juego-multijugador-para-el-curso-de-programacion-basica-de-platzi">
                    https://github.com/ocorzo-2021084/Juego-multijugador-para-el-curso-de-programacion-basica-de-platzi
                    </a>
                </div>
            </div>
            <br />
        </>
    )
}
