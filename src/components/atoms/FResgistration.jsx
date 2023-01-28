import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FResgistration(){
    const formR=useRef();
    return(
        <form ref={formR}>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="password" />
            </label>
        </form>
    )
}
export default FResgistration;