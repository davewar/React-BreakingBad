import React from 'react'
import CharcterItem from './CharcterItem'
import Spinner from '../Ui/Spinner'



const CharacterGrid = ({items, isloading}) => {



    return isloading ? ( <Spinner />)  :

     (

     <section className="cards">
         {
                items.map((item)=>{
                    // console.log(item);

                return <CharcterItem  key={item.char_id} item={item}/>

                 })

         }
            


     </section>
     
     )


}

export default CharacterGrid
