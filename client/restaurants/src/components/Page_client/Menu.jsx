import { useState, useEffect   } from 'react'
import axios from 'axios'
import style from "./styles/Menu.module.css"


export default function (props) {
    const [menus, setMenus] = useState([])
    const [order, setOrder] = useState([]) ;
    const [totalPrice, setTotal] = useState(0)
    const [newMenu, setNewMenu] = useState({
      name: "",
      ingredients: "",
      price:0
    })

    //funcion que hace pide los menus al back y los setea en el estado Menus
    const get_menus = async() =>{
      let {data} = await axios("/menus")
      setMenus(data)
    }

    
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
  
    //agrego comida a mi pedido 
    const pushFood = (food) =>{
      setOrder([...order, food])
      let price = totalPrice + food.price
      setTotal(price)
    }

    const sendOrder = async () =>{
      //numero de la mesa
      const n_table = parseInt(props.n_mesa);
      //array de ids de las comidas con sus cantidades
      
      let obj = {}; // Objeto para contar las ocurrencias de cada ID
        
        order.forEach(({id}) => {
            // Verificar si el ID ya existe en el objeto.
            // Si existe, se incrementa el contador; de lo contrario, se establece en 1.
            id in obj ? obj[id]++ : obj[id] = 1;
        });
        
       const array = Object.entries(obj); // Convertir el objeto en un array de pares clave-valor
      
       axios.post("/orders",{n_table , food : array})   

      setOrder([])
      setTotal(0)
    }

 let count = 0

  return (
  <div className={style.container}> 

    <div className={style.containerMenu}>
      <h2>Menu</h2>
      { menus.length 
              ? menus.map((food)=>{
                  return <div
                  className={style.food}
                  key = {food.id}
                  onClick={()=>pushFood(food)}
                  >
                  <p>{food.name}</p>
                  <p>{food.ingredients}</p>
                  <p>{food.price}</p>

                  </div>
              }) 
              : null} 
    </div>

    <div className={style.containerOrder} >
      <div className={style.order}>
      {
        order.map((food) =>{
          return <div
          className={style.foodSelected}
          key = {++count}>
            <p>{food.name}</p>
            <p>{food.price}</p>
          </div>
        })
      }
      </div>
      
      <div className={style.actions}>

        <p>Total: {totalPrice} </p>
        <button onClick={()=>sendOrder()}>Enviar Pedido</button>
      </div>
    </div>
   
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