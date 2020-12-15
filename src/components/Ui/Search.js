import React, {useState} from 'react'

const Search = ({getQuery}) => {

            const [text,setText] = useState("")

            const handleChange = (e) =>{
                setText(e.target.value)
                getQuery(e.target.value)

            }

            

    return (
        <section className="search">

            <form action="" >
                <input type="text" value={text} onChange={handleChange}
                 className="form-control" placeholder="search..." autoFocus/>
            </form>
            
        </section>
    )
}

export default Search
