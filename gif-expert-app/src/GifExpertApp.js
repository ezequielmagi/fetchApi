import { useState } from 'react'
import AddCategory from './components/AddCategory'


export default function GifExpertApp() {

    const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"])

  /*  
    const handleAdd = () => {
     setCategories ( ["Mazinger" , ...categories ] )
         setCategories ( cats => [ ...cats , "Mazinger" ] ) es otra forma de hacer lo mismo pero con un callback 
    }
 */

    return (
        <div>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories } />

            <hr />
            

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category } > { category } </li>
                    })
                }
            </ol>
        </div>
    )
}
