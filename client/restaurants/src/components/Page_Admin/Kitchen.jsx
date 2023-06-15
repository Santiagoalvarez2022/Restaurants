import style from "./style/Kitchen.module.css";
import { Link } from 'react-router-dom';
import { useState,useEffect, React } from 'react';
import axios from "axios";

export default function Kitchen() {
  const [orders, setOrdes] = useState([]);

  const getData = async() =>{
    const {data} = await axios("/orders");
    setOrdes(data);
  }

  //pido todos los pedidos
  useEffect(()=>{
    getData()    
  },[]);
  /*{
    "n_table": 7,
    "state": false,
    "menu": [
        {
            "name": "Guisado",
            "ingredients": "Arros, papas, morrron, pure de tomate, ...",
            "cantidad": 2
        },
        {
            "name": "Milanesa c/ Pure",
            "ingredients": "Milanesa de carne/pollo pure de papas o mixto ",
            "cantidad": 1
        }
    ]
} */
  
  console.log(orders);
  return (
    <div className={style.container}>
        <button><Link to="/" >Inicio</Link></button>
        
        <div>
            <div>
                <h2>Pendientes</h2>
                {orders.length 
                  ? orders.map((order)=>{
                    const {n_table, menu} = order;
                    if(!order.state){
                      return <div className={style.orders}>
                        <h4>Mesa  : {n_table}</h4>
                        {
                          menu.map((food)=>{
                            return <p>comida {food.name}      ------------- cantidad: {food.cantidad} </p>
                          })
                        }

                      </div>
                    }
                  })
                  : <>cargando</>
                }
            </div>
            <div>
                <h2>Listos</h2>
            </div>
        </div>    
    </div>
  )
}
