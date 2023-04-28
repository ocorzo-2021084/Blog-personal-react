import React from 'react'

export const ApiAlumnos = () => {
    return (
        <>
            <br />
            <br />
            <div className='container'>
                <div className="clearfix">
                    <h2>API control de alumnos (2023)</h2>
                    <img src="./src/assets/alumnos.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                    <p>
                    Este proyecto es una API desarrollada con NodeJS y con conexión a mongoDB, está API lleva el control académico para los alumnos de un centro educativo, existen dos roles: ROL_ALUMNO y ROL_MAESTRO. El rol maestro puede  loggearse, editar su usario, eliminar a un alumno, crear cursos y eliminarlos.
                    </p>

                    <p>
                    El rol alumno puede crear su perfil, loggearse, editar su usuario, eliminarlo y cerrar sesión. El rol alumno puede asignarse a un máximo de 3 cursos, si intenta asignarse a un curso más le saldrá un mensaje negandole la acción porque ha alcanzado el máximo de cursos asignados.
                    </p>

                    <p>
                        Link del repositorio en GitHub:
                    </p>

                    <a href="https://github.com/ocorzo-2021084/Ejercicio-practica-supervisada2">
                    https://github.com/ocorzo-2021084/Ejercicio-practica-supervisada2
                    </a>
                </div>
            </div>
            <br />
        </>

    )
}
