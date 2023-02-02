
import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoLogin from "../../assets/img/3dfingerprint.png"
import "../../assets/style/Regist.css"

function FLogin(){
    
    const formL=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
        let users="";
        
        fetch("http://localhost:3000/user") //enviar el request al servidor "nombre del archivo"
        .then(function (response) {
        return response.json(); //convetir los datos de .json a un objeto javascrip
    })
    .then(function (user) {
     users = user;
    console.log(users);
    })
    for (let users of users) {
        console.log();
    }
    if(users="darinels"){

    }else{}
    }
    return(
        <form ref={formL}>
            <div className="LittleBoxy">
                <img className="LogosGeneric" src={LogoLogin} alt="" />
            </div>
            
            <div className="LittleBoxy"><h1>Login</h1></div>
            <div className="LittleBoxy"><label htmlFor="username">Username</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="password" /></div>

            <div className="LittleBoxy">
            <button onClick={handlerClick}>Iniciar Sesion </button>
            <Link to="/Regist"><button>Registrar Algo</button></Link>
            <Link to="/Registration">No tienes cuenta?, registrate</Link>
            <Link to="/RickAndMorty"><button> RickAndMorty</button></Link>
            </div>
        </form>
    )
}
export default FLogin;