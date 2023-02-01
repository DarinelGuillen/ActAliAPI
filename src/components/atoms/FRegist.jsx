import { useRef } from "react";
import { Link } from "react-router-dom";
import {useState} from 'react'

import LogoRegist from "../../assets/img/bus.png";

function FRegist() {
    const [NuLi,setNuLi]=useState("")
    const handlerClick = (e) => {
        e.preventDefault();
    };
    const handlerClickG=(e)=>{
        e.preventDefault();
     let Rnum=Math.floor(Math.random() * 10000000 + 1000000);
        console.log(Rnum);
        setNuLi(Rnum)
    }
    return (
        <form >
            <div className="LittleBoxy">
                <img className="LogosGeneric" src={LogoRegist} alt="Alta Autubus" />
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Clave autobus">
                    Clave autobus
                    <input id="ClaveAutobus" type="text" />
                </label>
                <label htmlFor="Placa autobus">
                    Placa autobus
                    <input id="PlacaAutobus" type="text" />
                </label>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Número de asientos">
                    Número de asientos
                    <input id="NúmeroAsientos" type="number" />
                </label>
                <div className="LittleBoxy">
                    <label htmlFor="Fecha de alta">
                        Fecha de alta
                        <input id="FechaAlta" type="date" />
                    </label>
                </div>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Tipo">Tipo</label>
                {/* <input type="text" id="box" name="comboboxbox"/> */}
                <select name="list">
                    <option value="Turismo">Turismo</option>
                    <option value="Lujo">Lujo</option>
                </select>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Nombre del Chofer">
                    Nombre del Chofer
                    <input id="NombreChofer" type="text" />
                </label>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Numero de licencia">
                    Numero de licencia
                    <input id="Numerolicencia" 
                    value={NuLi}  type="text" />
                    <div className="LittleBoxy">
                    <button onClick={handlerClickG}>Generar</button>
                    </div>
                </label>
            </div>

            <div className="LittleBoxy">
                <button onClick={handlerClick}>Alta autobus</button>
            </div>
            <div className="LittleBoxy">
                <Link to="/">Log Out</Link>
            </div>
        </form>
    );
}
export default FRegist;
