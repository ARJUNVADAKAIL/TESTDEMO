// const flag=document.createElement("img");
// flag.src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
// flag.setAttribute("class","flag");
// // document.body.append(flag);


// const countryname=document.createElement("h2");
// countryname.innerText= "Germany";
// // document.body.append(countryname);

// const population=document.createElement("p");
// population.innerText= "population : 81,770,900";
// // document.body.append(population);

// const region=document.createElement("p");
// region.innerText= "region:Europe";
// // document.body.append(region);

// const capital=document.createElement("p");
// capital.innerText= "capital:Berlin";
// document.body.append(flag,countryname,population,region,capital);

// ---------------------------------------------------

let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ]; 

function createcountry({ name, flag, population, region, capital }){
    const container=document.createElement("div");
    container.setAttribute("class","container");
    // const { name, flag, population, region, capital }=country; //object destructuring
    container.innerHTML= ` <img class="flag" src= "${flag}" alt="Germany">
    <div class="info">
    <h2> ${name}</h2>
    <p><span>population :</span>${population}</p> 
    <p><span> region:</span>${region}</p> 
    <p><span>capital:</span>${capital}</p>
    </div> `;
    document.body.append(container);
    
}

countriesInfo.forEach(country => createcountry(country));

// ---------------------------------------------------
// function createcountry(country){
//   const container=document.createElement("div");
//   container.setAttribute("class","container");
//   console.log(country);
//   // const population=1000;
//   container.innerHTML= ` <img class="flag" src= "${country.flag}" alt="Germany">
//   <div class="info">
//   <h2> ${country.name}</h2>
//   <p><span>population :</span>${country.population}</p> 
//   <p><span> region:</span>${country.region}</p> 
//   <p><span>capital:</span>${country.capital}</p>
//   </div> `;
//   document.body.append(container);
  
// }

// countriesInfo.forEach(country => createcountry(country));

