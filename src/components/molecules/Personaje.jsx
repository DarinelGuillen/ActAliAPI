

function Personaje({img, name}){
    
    return(
        <div className="character">
        <img src={img} alt={name} />
        
        <div>
        <span id="name">{name}</span>
        </div>
       </div>
    )
}
export default Personaje;