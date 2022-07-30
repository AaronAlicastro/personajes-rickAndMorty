// apartado de personajes en la app
import React, {useState} from "react";
import { RequestRickMorty } from "../request/RequestRickMorty.jsx";
import "../estilos/personajes.css";

export function Personajes() {
    let [personajes, setPersonaje] = useState([]);
    let [actual, setActual] = useState(null);
    let peticion = new RequestRickMorty();
    let key = 0;
    
    const renderPersonajes = tamano => { // cargará los personajes
        if(tamano > 0){
            return (
                <div id="conPersonaje">
                    <div id="cartaPresentacion">
                        <div id="carta">
                            <img src={actual.image} alt="personaje" />
                        </div>
                        <div id="cartillaInfo">
                            <div className="firstColumn">
                                <h6>{actual.name}</h6>
                                <h6>Character id: {actual.id}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Status:</b></h6>
                                <h6>{actual.status? actual.status : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Species:</b></h6>
                                <h6>{actual.species? actual.species : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Type:</b></h6>
                                <h6>{actual.type? actual.type : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Gender:</b></h6>
                                <h6>{actual.gender? actual.gender : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Origin:</b></h6>
                                <h6>{actual.origin? actual.origin : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Location:</b></h6>
                                <h6>{actual.location? actual.location : "unknown"}</h6>
                            </div>
                            <div className="columnasCartilla">
                                <h6><b>Created at:</b></h6>
                                <h6>{actual.created? actual.created : "unknown"}</h6>
                            </div>
                        </div>
                    </div>
                    <div id="conBTNgeneral">
                        <button className="btnGenerar" onClick={addPerson}>Generar</button>
                    </div>
                    <div id="containerHistorial">
                        <h2>History</h2>
                        {
                            personajes.map(pe => {
                                key += 1;
                                return (
                                    <div className="cartillaHistorial" key={key+""}>
                                        <div className="celdas">
                                            <img src={pe.image} alt="personaje" />
                                        </div>
                                        <div className="celdas">
                                            {pe.name}
                                        </div>
                                        <div className="celdas">
                                            <button className="viewPersonaje" onClick={()=> verPersonaje(pe._id)}>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        }else{
            return (
                <div id="sinPersonaje">
                    <div><h3>No hay personajes cargados</h3></div>
                    <div><button className="btnGenerar" onClick={addPerson}>
                        Generate
                    </button></div>
                </div>
            );
        }
    };
    const verPersonaje = id => {
        let currentPersonaje = personajes.filter(pe => id == pe._id);
        setActual(currentPersonaje[0]);
        scroll(0, 0);
    }
    const addPerson = () => {
        peticion.sendPeticion(personaje => {
            let per = peticion.crearBase(personaje);
            per._id = key;
            setActual(per);
            setPersonaje([per, ...personajes]);
        });
    };

    return (
        <div id="containerPersonajes">
            {
                renderPersonajes(personajes.length)
            }
        </div>
    );
}