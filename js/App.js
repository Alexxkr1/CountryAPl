const searchBtn = document.querySelector('.search');
const select = document.querySelector('#mySelect');
const infoList = document.querySelector('.infoList');

searchBtn.addEventListener('click', getInfo);

function getInfo(){
    let selectedCountry = select.value;
    let url = `https://restcountries.com/v2/name/${selectedCountry.toLowerCase()}`;
    let output = ``;
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let div = document.createElement("div"); 
    let img = document.createElement("img"); 

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        output = document.createTextNode(` 
        Name: ${data[0].name}.
        `);
        h2.appendChild(output);

        output = document.createTextNode(` 
        region: ${data[0].region}.
        `);
        h3.appendChild(output);

        output = document.createTextNode(` 
        Subregion: ${data[0].subregion}.
        `);
        h4.appendChild(output);

        output = document.createTextNode(` 
        TLD: ${data[0].topLevelDomain}.
        Calling code:\n +${data[0].callingCodes +[0]}.
        Capital: ${data[0].capital}. 
        Population: ${data[0].population} people. 
        Timezone: ${data[0].timezones[0]}. 
        Language name: ${data[0].languages[0].name} language.
        Currency: ${data[0].currencies[0].name} - ${data[0].currencies[0].code} - ${data[0].currencies[0].symbol}. 
        Flag: `);
        div.appendChild(output);
        img.src = `${data[0].flags.png}`;
    })

    infoList.appendChild(h2);
    infoList.appendChild(h3);  
    infoList.appendChild(h4);
    infoList.appendChild(img);
    infoList.appendChild(div);
    
}