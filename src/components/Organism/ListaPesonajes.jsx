
import{useState} from 'react'
import Personaje from "../molecules/Personaje";
import "../../assets/style/RickAndMorty.css"
function ListaPesonajes(){
    const[character, setCharacter]=useState([])
const handlerClick=(e)=>{
    fetch('http://rickandmortyapi.com/api/character')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        setCharacter(data.results)
    })
    }
    return(
        <>
        <div>
        <h3>Lista de personajes</h3>
        <button onClick={handlerClick}>CLICK</button>
        <div className='allCaracters'>
            {character.map(character=><div> <Personaje img={character.image} name={character.name}/></div>)}
        </div>
        </div>
        </>
    
    )
}
export default ListaPesonajes;