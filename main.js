const loadData = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(data => showDisplay(data))
}

const showDisplay = (data)=>{
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    data.forEach(element => {
        const newElement = document.createElement('div');
        newElement.classList.add('text-xl', 'p-2');
        newElement.innerHTML = `
            <img class="w-full h-40" src="${element.flags.png}" alt="">
            <h2 class="my-2">Conutry Name: ${element.name.common}</h2>
            <h3 class="mb-2">Capital City: ${element.capital[0]}</h3>
            <h4>Region: ${element.region}</h4>
        `;
        console.log(element);

        countryContainer.appendChild(newElement)
    });
}

const regionClick = (region) =>{
    loadData(region);
}

const filterRegion = () =>{
    const filterRegion = document.getElementById('region');
    filterRegion.classList.toggle('hidden');
}


loadData('africa');