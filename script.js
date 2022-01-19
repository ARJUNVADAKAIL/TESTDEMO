//XML-HTTP
//rest countries 
//The output of this api is an Array of JSON object
//we have 4 steps in performing the operations
//var student={name:"john doe"}

//step01:create a XHR object
//var variable 
//req/request/any userdefined name
var request=new XMLHttpRequest();
//step02:create a connection/extracting the info 
//HTTP METHOD:GET 
//API url:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a connection 
request.send();
//step 04:once the data successfully loaded(onload) from the server 
//data coming from server is of type string
//we have to convert string to Object(JSON)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
         //console.log(data[i].name,data[i].capital)
         //console.log(`Country:${data[i].name} \n Capital:${data[i].capital}`);
         //console.log(`Country:${data[i].name} \n Capital:${data[i].capital} \n latitude:${data[i].latlng[0]} \n logitude:${data[i].latlng[1]}`);
        console.log(`Country:${data[i].name} \n Capital:${data[i].capital} \n latitude:${data[i].latlng[0]} \n logitude:${data[i].latlng[1]} \n flag:${data[i].flag}`);

    }
}

//print the details 

//q1: print the country name of all the countries in console

//q2: from the above question also print country name along with the capital
//template literal:
//ES6
//q3: print the latitude and longitude values along with country name
//q4: print the country flag