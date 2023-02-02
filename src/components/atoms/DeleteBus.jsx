import { useRef } from "react";
import { Link } from "react-router-dom";
import {useState} from 'react'

import LogoRegistDelete from "../../assets/img/businessMan.png";

function FRegist() {
    
    const formDelete=useRef();
    const [NuLi,setNuLi]=useState("")
    const handlerClick = (e) => {
        e.preventDefault();
        const formData=new FormData(formDelete.current);
        let URI="http://34.225.239.102/api/autobus/barrar"//default post
        console.log(formData.get('tipo'));
        let options={
            method:'DELETE',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                    id:formData.get('id'),
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    };
    
    return (
        <form ref={formDelete}>
            <div className="LittleBoxy">
                <img className="LogosGeneric" src={LogoRegistDelete} alt="Delete Autubus" />
            </div>
           <div className="LittleBoxy">
            <label htmlFor="ID">ID de BUS a Borrar
                <input type="number" name="id" />
            </label>
           </div>
           <div className="LittleBoxy">
            <button onClick={handlerClick}>Iniciar Sesion </button>
           </div>
            <div className="LittleBoxy">
                <Link to="/Regist">Alta BUs</Link>
            </div>
        </form>
    );
}
export default FRegist;