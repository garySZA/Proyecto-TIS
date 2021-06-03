import { Component } from "react";
import { Row, Button, Col,Image, Container,Form} from 'react-bootstrap';
import { Label } from "reactstrap";





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
                    <Container className="contenedorUnidadGasto">

                        <Row className="cabezaUnidadGasto">
                            <Label className="tituloUnidadGasto">
                                Registro Unidad de Gasto
                            </Label>
                        </Row>

                        <Col>
                            <Label>Facultad</Label>
                        </Col>

                    </Container>
                ):(<div></div>)}
            </Container>);
    }
}

export default Registro_Unidad_Gasto;