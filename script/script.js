console.log(menuOptions)

const show = document.querySelector('ul')
const btnshowEverything = document.querySelector('#show-all')
const btnMapAll = document.querySelector('#map-all')
const btnReduce = document.querySelector('#add-all')
const paragraph = document.querySelector(".showValueAll")
const btnvegan = document.querySelector('#only-vegan')

function coinFormat(element){
    return element.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) //formato moeda
}

function showAll(arrayProducts) {

    show.innerHTML = ''
    arrayProducts.forEach(element => {

        show.innerHTML +=
        `
        <li>
            <img src="${element.src}" alt="burguer">
            <p>${element.name}</p>
            <p class="item-price">${coinFormat(element.price)}</p>
        </li>
        `
    });

}

function mapAllitems() {

    const descount = menuOptions.map(element => ({
        ...element, //Spread Operator (matem todos os items de um array sem alteração)
        price: element.price * 0.9
    }))

    showAll(descount);

}

function addAll (){

    const countAddAll = menuOptions.reduce((acc, element) => {
         return acc + element.price
    }, 0)

    paragraph.innerHTML = `A soma de todos os itens é: ${coinFormat(countAddAll)}`
}

function veganFilter(){

    show.innerHTML = ''

    const onlyVegans = menuOptions.filter(element => {

        if(element.vegan === true){
        
        show.innerHTML +=

        `
        <li>
            <img src="${element.src}" alt="burguer">
            <p>${element.name}</p>
            <p class="item-price">${coinFormat(element.price)}</p>
        </li>
        `

        }else{
            return false
        }
    })

}

btnshowEverything.addEventListener('click', () => showAll(menuOptions))
btnMapAll.addEventListener('click', mapAllitems)
btnReduce.addEventListener('click', addAll)
btnvegan.addEventListener('click', veganFilter)






