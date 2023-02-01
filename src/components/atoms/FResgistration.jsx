import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoRegistration from "../../assets/img/security-tag.png"

function FResgistration(){
    const formR=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
    }
    return(
        <form ref={formR}>
           <div className="LittleBoxy">
                <img className="LogosGeneric" src={LogoRegistration} alt="" />
            </div>
            <div className="LittleBoxy"><label htmlFor="name">name</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="E.Mail">E.Mail</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="Usernme">Usernme</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="password">password</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy">
            <button onClick={handlerClick}>Registro</button>
            </div>
            <div className="LittleBoxy">
            <Link to="/">Ya tengo cuenta </Link>
            </div>
        </form>
    )
}
export default FResgistration;