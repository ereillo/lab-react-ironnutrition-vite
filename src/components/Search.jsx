import { useState } from "react"

function Search(props) {

    const [ queryInput, setQueryInput ] = useState("")
    

    const handleSearch = (event) => {
        console.log(event.target.value)
        setQueryInput(event.target.value)
    
        const filteredArr = props.foods.filter((eachFood) => {
          if (eachFood.name.startsWith(event.target.value) === true) {
            return true
          } else {
            return false
          }
        })
    
        console.log(filteredArr)
        props.setFoodsToRender(filteredArr)
    
    
      }
    return (
    <div>
        <form>


        <label htmlFor="query">Buscar</label>
        <input type="text" name="query" value={queryInput} onChange={handleSearch}/>
        

        </form>
    </div>
  )
}

export default Search