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
        <div className={styles.boxOne}> 
            <h1 className={styles.title}>Restaurante</h1>
        </div>

        <div className={styles.boxTwo}>
            <div className={styles.message}>

                <button>
                    <Link to="/kitchen" >Ver la cocina</Link>
                </button>
                <h2>Porfavor eligé una mesa!  </h2>
            </div>
            <div className={styles.tables}>
                {
                    tables.length 
                    ? tables.map(table=>{
                        return <div
                        className={styles.table}
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
        
    </div>
  )
}
