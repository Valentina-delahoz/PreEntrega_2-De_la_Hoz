function Ir_seleccion() {
    localStorage.clear();
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha_ida = luxon.DateTime.DATE_MEDfromFormat(document.getElementById('fecha_ida').value, 'yyyy-MM-dd').toISO();
    const fecha_regreso = luxon.DateTime.fromFormat(document.getElementById('fecha_regreso').value, 'yyyy-MM-dd').toISO();
    
    console.log(origen);
    console.log(destino);
    console.log(fecha_ida);
    console.log(fecha_regreso);

    if (origen.trim() !== "" && destino.trim() !== "" && fecha_ida.trim() !== "") {
        const formulario = document.getElementById('formulario');
        localStorage.setItem('origen', origen);
        localStorage.setItem('destino', destino);
        localStorage.setItem('fecha_ida', fecha_ida);
        localStorage.setItem('fecha_regreso', fecha_regreso);
        formulario.action = "http://127.0.0.1:5501/pages/seleccion.html";
        formulario.submit();
    } 
    else {}
}