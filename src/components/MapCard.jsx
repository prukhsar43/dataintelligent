import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FCArd from './Card'

const MapCAArd = () => {
    const [api, setApi] = useState([])

    //  Adding handeler 
    const addFav = (para) =>{
      const characters = localStorage.getItem('liked')
        if(characters){
            const likedArray = JSON.parse(characters)
            likedArray.push(para)
            localStorage.setItem("liked",JSON.stringify(likedArray))
            alert ("Data is saved in Favourites")
            return;
        }
        localStorage.setItem('liked', JSON.stringify([para]))
        alert("Data Added")
      
      
  }


const getDataApi = ()=>{
  axios.get("https://rickandmortyapi.com/api/character").then(response=>{
    setApi(response.data.results)
  }).catch(err=>{
    console.log(err)
  })
}


    useEffect(()=>{
      getDataApi()
    },[api])

  return (
    <div>
     {api.map((ele, i)=>{
         return (
             <FCArd image={ele.image}
              Name={ele.name}
               Status={ele.status}
                species={ele.species}
                 gender={ele.gender}
                 element={ele}
                 addFav={addFav}
                 key={i}
                 ele={ele}/>
         )
     })}
    </div>
  )
}

export default MapCAArd;
