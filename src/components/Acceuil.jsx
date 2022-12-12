import React from 'react'
import ListUser from './ListUser'
import '../components/Acceuil.css'
import { Outlet } from 'react-router-dom'

export default function Acceuil() {
  return (
    <div>
        <header>Gestion des taches </header>
        <h1>Liste des utilisateurs </h1>
        <ListUser/>
        <Outlet/>
    </div>
  )
}
