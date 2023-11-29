const loadData = (region = '', regionlis = 'region') => {
    fetch(`https://restcountries.com/v3.1/${regionlis}/${region}`)
    .then(res => res.json())
    .then(data => showDisplay(data))
}

const showDisplay = (data)=>{
    const countryContainer = document.getElementById('country-container');
    console.log(data);
    countryContainer.innerHTML = '';
    data.forEach(element => {
        const newElement = document.createElement('div');
        newElement.classList.add('text-xl', 'p-2');
        newElement.innerHTML = `
            <img class="w-full h-40" src="${element.flags.png}" alt="">
            <h2 class="my-2">Conutry Name: ${element.name.common}</h2>
            <h3 class="mb-2">Capital City: ${element.capital ? element.capital[0] : 'No Capital'}</h3>
            <h4>Languages: ${Object.values(element.languages)[0]}</h4>
        `;
        countryContainer.appendChild(newElement);
    });
}

const languageData = () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => languageShow(data))
}

const languageShow = (data) =>{
    const langContainer = document.getElementById('lang-container');
    const newArrayValue = [];
    data.forEach(element =>{
        if(element.languages !== undefined){
            newArrayValue.push(Object.values(element.languages)[0]);
        }
    })
    const languageData = [];
    for(const filterArray of newArrayValue){
        if(languageData.includes(filterArray) === false){
            languageData.push(filterArray);
        }
    }
    languageData.forEach(element =>{
        const newElement = document.createElement('li');
        newElement.classList.add('cursor-pointer', 'w-100');
        newElement.innerHTML = `
        <button onclick="loadData('${element}', 'lang');" class="text-lg py-2 text-start hover:text-red-500 ">${element}</button>
        `;
        langContainer.appendChild(newElement);
    })
}

const regionClick = (region) =>{
    loadData(region);
}

const filterRegion = (elementId) =>{
    const filterRegion = document.getElementById(elementId);
    filterRegion.classList.toggle('hidden');
}

languageData();
loadData('Africa');
