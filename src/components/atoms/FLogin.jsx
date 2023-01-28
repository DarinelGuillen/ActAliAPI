import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FLogin(){
    const formR=useRef();
    return(
        <form ref={formR}>
            <label htmlFor="username">
                <input type="text" />
            </label>
            <label htmlFor="password">
                <input type="password" />
            </label>
        </form>
    )
}
export default FLogin;