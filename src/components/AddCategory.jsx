import { useState } from "react"
export const AddCategory = ({onNewCategorie}) => {

    const [inputValue, setInputValue] = useState("One Punch")
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if(newInputValue.length < 1) return;

        onNewCategorie(newInputValue)// manda el valor limpio
        setInputValue(''); // borra el input field despues del submit
    }
  return (
    <form onSubmit={ ( event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder="buscar gif" 
            value={inputValue} 
            onChange={(event) =>onInputChange(event)}></input>
    </form>
  )
}
