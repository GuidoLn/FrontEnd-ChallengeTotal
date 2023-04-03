import Swal from 'sweetalert2';
import withRactContent from 'sweetalert2-react-content';

export function show_alerta(mensaje,icono,foco){
    const MySwal = withRactContent(Swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    })
}
function onfocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
}