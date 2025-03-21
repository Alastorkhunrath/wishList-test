import React from "react";




// компонент BlockList принимаем пропс text и отображает его в теге <p>

const BlockList = ({ text, onDelete }) => {
        const blockList = {
            background: 'rgb(219, 219, 219)',
            width: '50%',
            margin: '10px auto',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
            
        }
        const wishText = {
            
            color: 'black',
            fontSize: '25px',
            width: '70%',
            wordWrap: 'break-word',
        }

        const btnList = {
            fontSize: '25px',
            outline: 'none',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color:'rgb(150, 150, 150)'
        }

        return(
            <div className="block__list" style={blockList}>
                <p className="wish__text" style={wishText}>{text}</p>
                <button type="button" className="button__del" style={btnList} onClick={onDelete}>Удалить</button>
            </div>
            
        )
    }



export default BlockList

