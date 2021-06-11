import React, {useState} from 'react';
import Registro_Unidad_Gasto from './formulario_registro_unidadesDeGasto.js';
import './formulario_registro_unidadesDeGasto.css';

import axios from 'axios';


const categorias = [
    {
        "nombreFacultad": "FAC. ARQUITECTURA Y CIENCIAS DEL HABITAT",
        "nombreCarrera": ["LIC. EN DIS. INTERIORES Y DEL MOBILIARIO", 
                          "LIC. EN DISEÑO GRAF Y COMUNIC VISUAL", 
                          "LIC. EN ARQUITECTURA",
                          "LIC. EN TURISMO", 
                          "TEC. SUPERIOR EN CONSTRUCCIONES"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS AGRICOLAS Y PECUARIAS",
        "nombreCarrera": ["LIC. EN INGENIERIA AGRICOLA", 
                          "LIC. EN INGENIERIA FITOTECNISTA", 
                          "LIC. EN INGENIERIA FORESTAL(NUE)",
                          "LIC. EN ING. AGROINDUSTRIAL", 
                          "LIC. EN INGENIERIA AGRONOMICA",
                          "TEC. SUPERIOR EN MECANIZACION AGRICOLA"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS ECONOMICAS",
        "nombreCarrera": ["LIC. EN ADMINISTRACION DE EMPRESAS",
                          "LIC. EN CONTADURIA PUBLICA", 
                          "LIC. EN ECONOMIA", 
                          "LIC. EN INGENIERA COMERCIAL",
                          "LIC. EN INGENIERA FINANCIERA"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS JURIDICAS Y POLITICAS",
        "nombreCarrera": ["LIC. EN CIENCIAS JURIDICAS",
                          "LIC. EN CIENCIAS POLITICAS (NUE)"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS SOCIALES",
        "nombreCarrera": ["LIC. EN SOCIOLOGIA",
                          "PROGRAMA DE LIC. EN ANTROPOLOGIA"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS VETERINARIAS",
        "nombreCarrera": ["LIC. EN MEDICINA VETERINARIA Y ZOOTECNIA"]
    },
    {
        "nombreFacultad": "FAC. CIENCIAS Y TECNOLOGIA",
        "nombreCarrera": ["LIC. EN BIOLOGIA",
                          "LIC. EN FISICA", 
                          "LIC. EN ING. ELECTROMECANICA", 
                          "LIC. EN INGENIERIA CIVIL (NUE)", 
                          "LIC. EN INGENIERIA DE SISTEMAS", 
                          "LIC. EN INGENIERIA DE SISTEMAS (NUE)", 
                          "LIC. EN INGENIERIA ELECTRICA", 
                          "LIC. EN INGENIERIA INDUSTRIAL", 
                          "LIC. EN INGENIERIA INFORMATICA", 
                          "LIC. EN INGENIERIA QUIMICA", 
                          "LIC. EN INGENIERIA MECANICA"]
    },
    {
        "nombreFacultad": "FAC. CS .FARMACEUTICAS Y BIOQUIMICAS",
        "nombreCarrera": ["LIC. EN BIOQUIMICA Y FARMACIA"]
    },
    {
        "nombreFacultad": "FAC. DESARROLLO RURAL y TERRITORIAL",
        "nombreCarrera": ["LIC. EN PROD. AGRARIA Y DES. TERRITORIAL",
                          "TECNICO SUPERIOR EN AGRONOMIA"]
    },
    {
        "nombreFacultad": "FAC. DE MEDICINA",
        "nombreCarrera": ["LIC. EN FISIOTERAPIA Y KINESIOLOGIA",
                          "LIC. EN MEDICINA", 
                          "LIC. EN NUTRICION Y DIETETICA",]
    },
    {
        "nombreFacultad": "FAC. DE ENFERMERIA",
        "nombreCarrera": ["LIC. EN ENFERMERIA",
                          "LIC. EN ENFERMERIA (NUE)"]
    },
    {
        "nombreFacultad": "FAC. HUMANIDADES Y CS. DE EDUCACION",
        "nombreCarrera": ["LIC. EN CIENCIAS DE LA EDUCACION",
                          "LIC. EN COMUNICACION SOCIAL(NUE)", 
                          "LIC. EN PSICOLOGIA (NUE)", 
                          "LIC. EN TRABAJO SOCIAL", 
                          "LIC. EN LINGUIS. APLIC.ENSEÑANZA LENGUAS"]
    },
    {
        "nombreFacultad": "FAC. DE ODONTOLOGIA",
        "nombreCarrera": ["LIC. EN ODONTOLOGIA (PLAN NUEVO)"]
    }
]

console.log("categorias" , categorias);

function Menu () {

    const [idArticulos, setIdArticulos] = useState(-1);

    const handlerCargarArticulos = function (e) {
        const opcion = e.target.value;
        console.log(opcion);

        setIdArticulos(opcion);
    }


    return (
        <div className="row contenedor-formularioDeRegistro">
            <div className="p-col-12 camposform solicitud__datos" id="dato__item">
                <div className="p-col-5 contenedor-camposform-subtitulos">
                    <h3 for="campo-item" className="subtitulos"> 
                        <i class="fas fa-school"></i> Nombre de Facultad:
                    </h3>
                </div>
                <div className="p-col-7 solicitud__datos-imputs">
                    <select className="entradas"
                        name="categorias"  
                        id="setCategorias"
                        title="elegirFacultad"
                        onClick={handlerCargarArticulos}>
                        <option value={-1}>Seleccione una Facultad </option>
                        {
                            categorias.map((item, i) => (
                                <option key={"categoria"+i} value={i}>{item.nombreFacultad}</option>
                            ) )
                        }
                    </select>
                </div>
            </div>

            <div className="p-col-12 camposform solicitud__datos" id="dato__detalle">
                    <div className="p-col-5 solicitud__datos-imputs">
                        <h3 for="campo-detalle" className="subtitulos"> 
                            <i class="fas fa-landmark"></i> Nombre de Carrera:
                        </h3>
                    </div>
                    <div className="p-col-7 solicitud__datos-imputs">
                        <select className="entradas"
                            name="articulos" 
                            id="selarticulos"
                            title="nombreCarrera">
                            {
                                idArticulos > -1 &&
                                (
                                    categorias[idArticulos].nombreCarrera.map((item,i) =>(
                                        <option key={"articulo" +i} value="">{item}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>
            </div>
        </div>
    )
}

export default Menu;