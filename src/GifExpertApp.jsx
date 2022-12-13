import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{
    // no poner condicionalmente los hooks, no recomendado
    const [categories,setCategories] = useState(['One Punch','Dragon Ball'])
    const onAddCategory= (newCategorie)=>{
        //console.log(newCategorie)
        // setCategories.concat(["valido"]) crea un nuevo arreglo
        //setCategories(cat=>[...cat,"asdasd"])
        if(categories.includes(newCategorie)) return // si ya existe en el arreglo el nuevo valor 
        
        setCategories([...categories,newCategorie]); // copia todo el arreglo original y agrega uno nuevo
    }
    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory 
                //onAddCategories={setCategories}
                onNewCategorie ={event=>onAddCategory(event)}

            />

            
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
                {categories.map(categories =>
                    (<GifGrid key={categories} category = {categories}/>)
                )}
        </>
    )
    }
