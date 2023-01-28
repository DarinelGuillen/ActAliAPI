import { useRef } from "react";
import {Link} from "react-router-dom" 
function FRegist(){
const formRe=useRef();
const handlerClick=(e)=>{
    e.preventDefault();
}
    return(
        <form ref={formRe}>
            <div className="LittleBoxy"><h1>Registro De XXXXX</h1></div>
            <div className="LittleBoxy"><label htmlFor="">XX</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="">XX</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="">XX</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="">XX</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="">XX</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy">
            <button onClick={handlerClick}>Insertar</button>
            <Link to="/"><button >Log Out</button></Link>
            </div>
        </form>
    );
}
export default FRegist;
