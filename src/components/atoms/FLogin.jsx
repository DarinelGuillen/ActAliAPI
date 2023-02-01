import { useRef } from "react";
import {Link} from "react-router-dom" 


function FLogin(){
    const formL=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
        to="/Regist"
    }
    return(
        <form ref={formL}>
            
            <div className="LittleBoxy"><h1>Login</h1></div>
            <div className="LittleBoxy"><label htmlFor="username">Username</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="password" /></div>
            <div className="LittleBoxy">
            <button onClick={handlerClick}>Iniciar </button>
            <Link to="/Regist"><button>Registrar Algo</button></Link>
            <Link to="/Registration"><button>Crear o  registrate </button></Link>
            <Link to="/RickAndMorty"><button> RickAndMorty</button></Link>
            </div>
        </form>
    )
}
export default FLogin;