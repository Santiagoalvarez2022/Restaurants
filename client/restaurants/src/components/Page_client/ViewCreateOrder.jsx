import React from 'react'
import {useParams} from "react-router-dom"
import Menu from './Menu'
import style from "./styles/CreateOrder.module.css"


export default function ViewCreateOrder(props) {

  const {id} = useParams()
  return (
    <div className={style.container}>
      <div className={style.one}>
        <h1>Mesa Nº {id}</h1>
      </div>

      <div className={style.two}>

          <Menu 
          n_mesa = {id}
          />
      </div>
    </div>
  )
}
