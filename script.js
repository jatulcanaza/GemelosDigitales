document.addEventListener('DOMContentLoaded', function () {
    const btnCrearProyecto = document.getElementById('btnCrearProyecto');
    const formCrearProyecto = document.getElementById('formCrearProyecto');
    const listaProyectos = document.getElementById('listaProyectos');

    // Mostrar/ocultar el formulario
    btnCrearProyecto.addEventListener('click', function () {
        formCrearProyecto.style.display = formCrearProyecto.style.display === 'none' ? 'block' : 'none';
    });

    // Manejar el envío del formulario
    formCrearProyecto.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombreProyecto = document.getElementById('nombreProyecto').value;
        const enlaceVideo = document.getElementById('enlaceVideo').value;
        const descripcionProyecto = document.getElementById('descripcionProyecto').value;
        const documentacion = document.getElementById('documentacion').files[0];
        const dataProyecto = document.getElementById('dataProyecto').files[0];

        // Crear un nuevo proyecto
        const proyecto = document.createElement('div');
        proyecto.className = 'proyecto mb-4 p-3 border rounded';
        proyecto.innerHTML = `
            <h3>${nombreProyecto}</h3>
            <p>${descripcionProyecto}</p>
            <a href="${enlaceVideo}" target="_blank">Ver Video</a>
            <div class="mt-2">
                <strong>Documentación:</strong> ${documentacion.name}<br>
                <strong>Data del Proyecto:</strong> ${dataProyecto.name}
            </div>
        `;

        // Agregar el proyecto a la lista
        listaProyectos.appendChild(proyecto);

        // Limpiar el formulario
        formCrearProyecto.reset();
        formCrearProyecto.style.display = 'none';
    });
});