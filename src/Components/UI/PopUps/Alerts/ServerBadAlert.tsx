import Swal from 'sweetalert2';

export const badContest = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error en el servidor',
    text: 'El servidor no respondió correctamente. Intenta nuevamente más tarde.',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#d33',
  });
};

export const godContest = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'La empresa ha sido modificada correctamente.',
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
      });

}

export const okAlergeno = ()=>{
  Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El alergeno ha sido creado correctamente.',
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
    });
}

export const okAlergeno2 = ()=>{
  Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El alergeno ha sido editado correctamente.',
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
    });
}