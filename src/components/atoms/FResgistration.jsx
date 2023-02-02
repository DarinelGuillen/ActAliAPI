import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoRegistration from "../../assets/img/security-tag.png"

function FResgistration(){
    const formDataRe = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formDataRe.current);
    
        let URI = "http://34.225.239.102/api/iniciar"; //default post
    
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
                nombre: formData.get("name"),
                usuario: formData.get("usuario"),
                correo:formData.get("E.Mail"),
                contrasenia: formData.get("contrasenia"),
          }),
        };
    
        fetch(URI, options)
          .then((response) => response.json())
          .then((MSN) => {alert(JSON.stringify(MSN))});
      };
    return(
        <form ref={formDataRe}>
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