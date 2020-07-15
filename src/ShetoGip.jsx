import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GigGrid } from './components/GigGrid'


const ShetoGip = () => {
   
   
   const [categories, setCategories] = useState(['One Punnch'])
    

    return(
        <>
        <h2>ShetoGip</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

      

        <ul>
            { 
                categories.map( category => 
                  <GigGrid 
                  key={category} 
                  category={category}/>
                )
            }
        </ul>
       </>    
    )
}



export default ShetoGip