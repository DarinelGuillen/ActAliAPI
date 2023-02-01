

function Personaje({img, name, status, gender, planet}){
    
    return(
        <div className="character">
        <img className="imgCaracters" src={img} alt={name} />
        
        <div>
        <span id="name">name: {name}</span>
        </div>
        <div>
        <span id="name">status: {status}</span>
        </div><div>
        <span id="name">gender: {gender}</span>
        </div><div>
        <span id="name">planet: {planet}</span>
        </div>
       </div>
    )
}
export default Personaje;