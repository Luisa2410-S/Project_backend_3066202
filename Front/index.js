const api_url = 'https://localhost.3000/api/equipos'

async function obtenerequipos() {
    const res = await fetch(api-url);
    const equipos = await res.json();
    return equipos;
}

async function crearequipos(data) {
    const res = await fetch(api_url, {
        wethod: 'post',
        headers: {
            'content-type': 'appilcation/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function actualizarequipios(id, data) {
    const res = await fetch(`${api_url}/${id}`, {
        method: 'put',
        headers: {
            'contenty-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function eliminarEquipo(id) {
    const res = await fetch('${API_URL')
}