 const cargarDatos = async() => {
     const url = 'https://api-rest-brucorp.herokuapp.com/';

     const res = await fetch(url);
     const datos = await res.json();
     console.log(datos);

     $(document).ready(function() {
         for (var i = 0; i < datos.data.length - 1; i++) {
             $("table").append("<tr >" +
                 "<td style='display:flex;'> " + (i + 1) + ") -> <a href='https://api-rest-brucorp.herokuapp.com/" + JSON.stringify(datos.data[i], null, 2).replace(/"/g, '') + "' target='_blank'>" + JSON.stringify(datos.data[i], null, 2).replace(/"/g, '') + " </a>" +

                 "</tr>");
         }
     });
 };


 cargarDatos();