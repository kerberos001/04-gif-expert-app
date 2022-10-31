import { useState } from "react";




const AddCategory = ({onNewCategory}) =>  {
    
    //siempre que se quiera actualizar el state se debe cambiar todo el valor no realizar push ya que este no es un nuevo obto es solo un nuevo item
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target:{value}}) => {
        setInputValue(value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();//permite que el formulario no refresque la pagina
        //onAddCategory(inputValue);
        //setCategories([inputValue, ...categories]);    
        //setCategories((categories) => ([inputValue, ...categories]));
        if ( inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('');



    }

    
    return (
    <>
    <form onSubmit={ onSubmit } >
        <input
            type='text'
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>      
    </>
  )
}


export {
    AddCategory
};
