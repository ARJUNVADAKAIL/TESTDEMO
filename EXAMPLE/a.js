var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
       console.log(data);
    for(var i=0;i<data.length;i++){
        var name=data[i].name;
        var long=data[i].latlng;
        wd(name,...long);      
    }
}

function wd(name,lat,lon){
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`;
var request= new XMLHttpRequest();
request.open("GET",url);
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(`${name}:${result.main.temp}`)
}

}