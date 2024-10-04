import canalController from './controller/canalController.js';
import programaController from './controller/programaController.js';
import usuarioController from  './controller/usuarioController.js';
import favoritoController from './controller/favoritoController.js';



export default function addCanal(sevidor) {

    sevidor.use(canalController)
    sevidor.use(programaController)
    sevidor.use(usuarioController)
    sevidor.use(favoritoController)
   
}