import React, { useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FiTrash2 } from 'react-icons/fi';

export default function Home() {
  
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [isChecked, setChecked] = useState("false");

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>To-do List</h1>
      <form
        className={styles.form}
        onSubmit={event => { 
          event.preventDefault(); 
          if(!!task){
            setList([...list, task]);
            setTask("");
          }
        }}
      >
        <input
          type="text"
          value={task}
          maxLength='15'
          onChange={event => setTask(event.target.value)}
          />
        <button type="submit" className={styles.form_btn}>Adicionar</button>
      </form>
      <ul className={styles.ul}>
        {list.map((todo, index) =>(
          <li key={index} className={styles.li}>
            <div className={isChecked ? "container_li" : "checked"} >
              <input type="checkbox" id='checkbox' onClick={handleToggle}/>
              <p>{todo}</p>
              <button><FiTrash2 /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
