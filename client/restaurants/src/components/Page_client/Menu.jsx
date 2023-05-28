import React from 'react'

export default function () {

    const [menus, setMenus] = useState([])
    const [newMenu, setNewMenu] = useState({
      name: "",
      ingredients: "",
      price:0
    })
  
    const get_menus = async() =>{
      let result = await axios("/menu")
      setMenus(result.data)
  
    }
    
    useEffect(()=>{
      const get_data = async() =>{
        get_menus()
      }
      get_data()
    },[])
  
  
    const post_menu = async(data) =>{
        axios.post("/menu", data)
    }
    const onSubmit = (event) =>{
      event.preventDefault()
    }
  
    const handlerNewMenu = ({target}) =>{
      const {name,value} = target;
      setNewMenu({...newMenu,[name]:value})
    } 
  
    const sendData = async (data) =>{
      post_menu(data)
      get_menus()
    }
  
    console.log(newMenu);


  return (<div className='container'> 
        <h1>Menus</h1>
        {
        menus.length 
            ? menus.map((food)=>{
                return<div className='food'
                key = {food.id}
                >
                <h2>{food.name}</h2>
                <h4>{food.ingredients}</h4>
                </div>
            }) 
            : null 
        }
    <div className='Container_form'>
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
    </div>
    </div>
  )
}
