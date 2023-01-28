import { useRef } from "react";
import {Link} from "react-router-dom" 

function FResgistration(){
    const formR=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
    }
    return(
        <form ref={formR}>
            <div className="LittleBoxy"><h1>Registrate</h1></div>
            <div className="LittleBoxy"><label htmlFor="name">Nombre Completo</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="username">Username</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="password" /></div>
            <div className="LittleBoxy">
            <button onClick={handlerClick}>Completar</button>
            <Link to="/"><button >Ya tengo cuenta </button></Link>
            </div>
        </form>
    )
}
export default FResgistration;