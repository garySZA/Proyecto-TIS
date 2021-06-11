import React,{useEffect,useState}   from 'react';

import './Presentation.css';
import { useHistory, Link }         from 'react-router-dom';

import { PanelMenu }                from 'primereact/panelmenu';
import { Button }                   from 'primereact/button';
import { Menubar }                  from 'primereact/menubar';

import logo from './img/UMSS_logo.png';

import { Carousel }                     from "react-responsive-carousel";




const Presentation = () =>{
  
    const history= useHistory();

    const handleOnClick =() =>{
        history.push('/Login');
    };

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
    const end   = <h1 className="end">Sistema de Cotizaciones</h1>;
    return(

        <div>
          <div className="p-grid">
              <div className="p-col-12 rowPanel">
                  <Menubar className="panelMenu"  start={start} />
                  <h1 className="end">Sistema de Cotizaciones</h1>
              </div>
          </div>
          <div className="p-grid p-align-center">
              <div className="p-col-4"></div>
              <div className="p-col-4">
              <Carousel autoPlay infiniteLoop className="carousel-Image">

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                          <p className="legend">Legend 1</p>


                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                          <p className="legend">Legend 2</p>


                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                          <p className="legend">Legend 3</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                          <p className="legend">Legend 4</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                          <p className="legend">Legend 5</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                          <p className="legend">Legend 6</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                          <p className="legend">Legend 7</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                          <p className="legend">Legend 8</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                          <p className="legend">Legend 9</p>

                          <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                          <p className="legend">Legend 10</p>

                  </Carousel>    
              </div>
              <div className="p-col-4"></div>

              <div className="p-grid p-align-center">
                  <div className="p-col-12 ">
                      <div className="card ">
                        <Button label="Ingresar" icon="pi pi-check" className="p-button-lg" onClick={handleOnClick}></Button>
                      </div>
                  </div>

              </div>

        
        </div> 
      </div>    
    )
}
export default Presentation;