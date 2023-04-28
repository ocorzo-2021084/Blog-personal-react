import React from 'react'
import { Mokepon } from './Mokepon'
import { AgendaWeb } from './AgendaWeb'
import { AppMensajeria } from './AppMensajeria'
import { Crud } from './Crud'
import { GestorOpiniones } from './GestorOpiniones'
import { ControlEmpresas } from './ControlEmpresas'
import { ApiAlumnos } from './ApiAlumnos'
import { ApiVentas } from './ApiVentas'
import { Almacenadora } from './Almacenadora'

export const Proyectos2023 = () => {
  return (
    <>
    <Mokepon></Mokepon>
    <AgendaWeb></AgendaWeb>
    <AppMensajeria></AppMensajeria>
    <Crud></Crud>
    <GestorOpiniones></GestorOpiniones>
    <ControlEmpresas></ControlEmpresas>
    <ApiAlumnos></ApiAlumnos>
    <ApiVentas></ApiVentas>
    <Almacenadora></Almacenadora>
    </>
  )
}
