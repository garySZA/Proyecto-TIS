import { Component } from "react";
import { Row, Button, Col,Image, Container,Form} from 'react-bootstrap';
import { Card, Label } from "reactstrap";





class Registro_Unidad_Gasto extends Component {
    constructor(props){
        super(props)
        this.state = {
            showMe:true,
        }
    }

    render(){
        return(
            <Container>
                {this.state.showMe ? (
                    <Row className="contenedorUnidadGasto">

                        <Row className="cabezaUnidadGasto" id="cabezaUnidadGasto" title="tituloUnidadGasto">
                            <Label className="entrada-tituloUnidadGasto">
                                Registro Unidad de Gasto
                            </Label>
                        </Row>

                        <Form className="formulario-unidadDeGasto" id="Formulario-unidadDeGasto">
                            
                            <Row className="camposUnidadGasto" id="camposNombreFacultad">
                                <Col className="subtituloNombreFacultad">
                                    <Label className="camposLabel"> <i class="fas fa-school"></i> Nombre de Facultad: </Label>
                                </Col>
                                <Col className="entradasComponentes">
                                    <select>
                                        <option> Elegir la Facultad </option>
                                        <option value="1">Facultad de Ciencias y Tecnologia</option>
                                        <option value="2">Facultad de Ciencias y Tecnologia</option>
                                        <option value="3">Facultad de Ciencias y Tecnologia</option>
                                        <option value="4">Facultad de Ciencias y Tecnologia</option>
                                        <option value="5">Facultad de Ciencias y Tecnologia</option>
                                        <option value="6">Facultad de Ciencias y Tecnologia</option>
                                        <option value="7">Facultad de Ciencias y Tecnologia</option>
                                        <option value="8">Facultad de Ciencias y Tecnologia</option>
                                        <option value="9">Facultad de Ciencias y Tecnologia</option>
                                        <option value="10">Facultad de Ciencias y Tecnologia</option>
                                    </select>
                                </Col>

                            </Row>

                        </Form>

                    </Row>
                ):(<div></div>)}
            </Container>);
    }
}

export default Registro_Unidad_Gasto;