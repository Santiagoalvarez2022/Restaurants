import React from 'react';
import styles from "./styles/ViewPrinvipal.module.css";
import Table from './Table';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function ViewPrincipal() {
    const [tables, setTables] = useState([])
    const get_tables = async() => {
        let result = await axios("/tables")
        setTables(result.data)
    }

    useEffect(()=>{
        get_tables()

    },[])



  return (
    <div className={styles.container}>
        <h1>Bienvenido a Fratelli</h1>
        <h2>Porfavor eligé una mesa!  </h2>
        <div className={styles.tables}>
            {
                tables.length 
                ? tables.map(table=>{
                    return <div
                    key={table.id}
                    > 
                    <Link to={`/table/${table.id}` }>
                        <Table 
                         num = {table.id}
                         />
                    </Link>
                        
                    </div>
                    })
                    : <h3>cargando</h3>
                }
            </div>
    </div>
  )
}
