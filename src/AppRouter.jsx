import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './blog/components/NavBar'
import { Footer } from './blog/components/Footer'
import { AcercaDe } from './blog/components/AcercaDe'
import { ControlAcademico } from './blog/components/ControlAcademico'
import { Calculadora } from './blog/components/Calculadora'
import { Proyectos2022 } from './blog/components/Proyectos2022'
import { Proyectos2023 } from './blog/components/Proyectos2023'

export const AppRouter = () => {
  return (
    <>
        <NavBar></NavBar>
        <Routes>

          <Route path='/inicio' element={
            <AcercaDe></AcercaDe>
          }></Route>

          <Route path='/proyectos2022' element={
            <Proyectos2022></Proyectos2022>      
          }>

          </Route>

          <Route path='/proyectos2023' element={
            <Proyectos2023></Proyectos2023>     
          }>

          </Route>

        </Routes>
        <Footer></Footer>
    </>
  )
}
