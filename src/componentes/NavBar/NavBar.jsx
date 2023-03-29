import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import style from './NavBar.module.css'
export default function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
      <li>Inicio</li>
      <li>Buscar</li>
      <li>Categoria</li>
      <li>Productos</li>
      <li>Contactos</li>

      </ul>
      <CardWidget/>
    </nav>
  )
}
