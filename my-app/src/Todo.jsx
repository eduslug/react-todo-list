
import React, { useState } from "react";
import List from "./List";
import TudoForm from "./TudoForm";
import './Todo.css';


function App() {

  const [text, setText] = useState('');
  const [itens, setItens] = useState([]);

  function handlerCahange(event) {
    event.preventDefault()
    let text = event.target.value
    setText(text)
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      setItens([...itens, text])
      setText("")
    }
  }

  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
      <form>
      <TudoForm/>
        <input type={'text'} onChange={handlerCahange} placeholder={'Adicionar uma tarefa:'} value={text}></input>
        <button onClick={addItem}>Adicionar</button>
      </form>
      <List itens={itens}/>
    </div>
  );
}

export default App;
