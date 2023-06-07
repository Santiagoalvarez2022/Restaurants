import React from 'react'
import { useState, useEffect   } from 'react'
import axios from 'axios'
import style from "./styles/Menu.module.css"
export default function () {

    const [menus, setMenus] = useState([])
    const [newMenu, setNewMenu] = useState({
      name: "",
      ingredients: "",
      price:0
    })

    const [order, setOrder] = useState([]) ;
    const get_menus = async() =>{
      let result = await axios("/menus")
      setMenus(result.data)
  
    }

    const [totalPrice, setTotal] = useState(0)
    
    useEffect(()=>{
      const get_data = async() =>{
        get_menus()
      }
      get_data()
    },[])
  
  
    // const post_menu = async(data) =>{
    //     axios.post("/menus", data)
    // }
    const onSubmit = (event) =>{
      event.preventDefault()
    }
  
    const handlerNewMenu = ({target}) =>{
      const {name,value} = target;
      setNewMenu({...newMenu,[name]:value})
    } 
  
    const sendData = async (data) =>{
      // post_menu(data)
      get_menus()
    }

    //agrego comida a mi pedido 
    const pushFood = (food) =>{
      setOrder([...order, food])
      let price = totalPrice + food.price
      setTotal(price)
      console.log(food);
    }



  return (
  <div className={style.container}> 

    <div>
      <h2>Menu</h2>
    {
        menus.length 
            ? menus.map((food)=>{
                return <div
                className={style.food}
                key = {food.id}
                onClick={()=>pushFood(food)}
                >
                <h2>{food.name}</h2>
                <h4>{food.ingredients}</h4>
                <h4>{food.price}</h4>

                </div>
            }) 
            : null 
    } 
    <div>
    </div>
    </div>
    <div>
      <h2>Pedidos</h2>
      {
        order.map((food) =>{
          return <div>
            <h4>{food.name}</h4>
            <h4>{food.price}</h4>
          </div>
        })
      }
    </div>
   
      <h2>Total: {totalPrice}</h2>
  </div>)
}





  {/* <div className='Container_form'>
        <form onSubmit={onSubmit}>
        <h3>Nueva comida</h3>
        <label>Nombre</label>
        <input onChange={handlerNewMenu} name='name' value={newMenu.name} ></input>
        <label>Ingredientes</label>
        <input onChange={handlerNewMenu} name='ingredients' value={newMenu.ingredients} ></input>
        <label>Precio</label>
        <input onChange={handlerNewMenu} name='price' value={newMenu.price} ></input>
        <button onClick={()=>sendData(newMenu)}>Enviar</button>
        </form>
    </div> */}