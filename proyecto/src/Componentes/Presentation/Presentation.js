import React,{useEffect,useState}   from 'react';

import './Presentation.css';
import { useHistory, Link }         from 'react-router-dom';

import { PanelMenu }                from 'primereact/panelmenu';
import { Button }                   from 'primereact/button';
import { Menubar }                  from 'primereact/menubar';

import logo from './img/UMSS_logo.png'
import {Col,Row,Container,Card,Image} from 'react-bootstrap';

import { Carousel }                     from "react-responsive-carousel";




const Presentation = () =>{
  
    const history= useHistory();

    const handleOnClick =() =>{
        history.push('/Login');
    };

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
    const end   = <h1 className="end">Sistema de Cotizaciones</h1>;
    return(
      <Container fluid >
        <Row className="rowPanel" xs={12}>
             <Menubar className="panelMenu"  start={start}  end={end}/>
        </Row>

        <Row xs={12}>
           <Col className="" xs={4}></Col>
           <Col className="carousel-demo" xs={4}>
              <Card className="card card-container">
                <Carousel autoPlay infiniteLoop className="carousel-Image">
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                        <p className="legend">Legend 1</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                        <p className="legend">Legend 2</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                        <p className="legend">Legend 3</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                        <p className="legend">Legend 4</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                        <p className="legend">Legend 5</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                        <p className="legend">Legend 6</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                        <p className="legend">Legend 7</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                        <p className="legend">Legend 8</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                        <p className="legend">Legend 9</p>
                    </Row>
                    <Row>
                        <img className ="images" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                        <p className="legend">Legend 10</p>
                    </Row>
                </Carousel>    
              </Card>  
           </Col> 
           <Col className="" xs={4}></Col>    
        </Row>
        <Row xs={12}>
           <Col className="" xs={4}></Col>
           <Col className="position-bottun" xs={4}>
              <Button label="Ingresar" icon="pi pi-check" className="p-button-lg" onClick={handleOnClick}></Button>
           </Col>
           <Col className="" xs={4}></Col> 
           
        </Row>  
              
      </Container>
         
    )
}
export default Presentation;