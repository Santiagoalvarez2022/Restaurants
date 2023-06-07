import React from 'react'
import {useParams} from "react-router-dom"
import Menu from './Menu'
import style from "./styles/CreateOrder.module.css"


export default function ViewCreateOrder(props) {

  const {id} = useParams()
  return (
    <div className={style.container}>
      <div>
        <h1>Mesa Nº {id}</h1>
      </div>

      <div className={style.card}>
        <div>
          <div>
            <h2>Pedido</h2>
          </div>
        </div>
        <div className={style.menuContainer}>
          <Menu />
        </div>
      </div>
    </div>
  )
}
