import './estilos_barra_lateral_izquierda.css';
import Botones from './botones';
import Campo_Central from '../Campo_Central/campo_central'

function BarraLateral() {
  return (
    <div>
      <div className="dinamico">
        <div className="opciones">
            <Botones />
        </div>
        <Campo_Central />   
    </div>
    </div>
  );
}

export default BarraLateral;