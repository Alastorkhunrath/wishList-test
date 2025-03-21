import logo from './logo.svg';
import './App.css';
import BlockList from './componets/block-list';
import { useState } from "react";

function App() {


  const styleHeader = {
    width: '100%',
    height: '200px',
    background: 'gray'
  }

  const headerCpntainer = {
    width: '100%',
    maxWidth: '600px',
    height: '100%',
    background: 'gray',
    margin: '0 auto'
  }

  const containerNovigation = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const inputBlock = {
    fontSize: '25px',
    padding: '5px',
    outline: 'none'
  }

  const btnBlock ={
    fontSize: '20px',
    padding: '5px 10px',
    outline: 'none',
    cursor: 'pointer'
  }

  const woshNoText = {
    fontSize:  '25px',
    textAlign: 'center',
    margin: '10px 0'

  }

  const [blackListComponents, setBlackListComponents] = useState([])


// использую хук для создания состояния inputValue, оно и будет хранить значение текстовго поля
  const [inputValue, setInputValue] = useState('')
  const addBlockList = () => {
    if (inputValue.trim()){
      setBlackListComponents([... blackListComponents, inputValue])
      setInputValue('')
    }
  }

  const deleteBlockList = (index) => {
    const newBlackList = blackListComponents.filter((_,i) => i !== index)
    setBlackListComponents(newBlackList)
  }



  return (
    <header className='header' style={styleHeader}> 
      <div className='header__container' style={headerCpntainer}>
        <div className='header__container__novigation' style={containerNovigation}>
          <input type="text" placeholder='Введите желание' style={inputBlock} value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
          <button type='button' style={btnBlock} onClick={addBlockList}>Добавить</button>
        </div>
      </div>
      <div className='header__container__block_lists'>
        {blackListComponents.length === 0? ( 
          <p style={woshNoText}>Пока желаний нет</p>
        ):(
          blackListComponents.map((text, index) => (
            <BlockList key = {index}
            text={text}
            onDelete={() => deleteBlockList(index)} />
        ))
        )}






        
       
        
        
      </div>
    </header>
    
  );
}

export default App;
