'<h3>WEATHER</h3><br/>'
let dataDB = {};
let cont = document.getElementsByClassName("content");

function check(){
    let search = document.getElementById("data").value;
    if(document.getElementById("data").value = "New York"){
        console.log("YYEEEESSS");
    }
    if(search != "New York" && search != "new york"){
        cont[0].innerHTML = "N/A. Please Choose A Value From The List"; 
        cont[1].innerHTML = ""; 
        cont[2].innerHTML = ""; 
        cont[3].innerHTML = "";
        search = "";
        return 0;
    }
    fetch('http://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7a5feb2447940fa21a6f142318c7db47')
    .then(response => response.json())
    .then(data => {dataDB = { weather:data.weather["0"].description, city:data.name, country:data.sys.country, temperature:data.main.temp} })
    .then(() => console.log(dataDB))
    .then(() => {cont[0].innerHTML = '<h3>WEATHER</h3><br/>' + dataDB.weather; cont[1].innerHTML = dataDB.city; cont[2].innerHTML = dataDB.country; cont[3].innerHTML = 'Kelvin: ' +  dataDB.temperature; search = "";})
}


console.log( document.getElementsByClassName("content"));

