console.log(menuOptions)

const show = document.querySelector('ul')
const btnshowEverything = document.querySelector('#show-all')
const btnMapAll = document.querySelector('#map-all')

function showAll(arrayProducts) {

    show.innerHTML = ''
    arrayProducts.forEach(element => {

        show.innerHTML +=
        `
        <li>
            <img src="${element.src}" alt="burguer">
            <p>${element.name}</p>
            <p class="item-price">R$${element.price},00</p>
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

btnshowEverything.addEventListener('click', () => showAll(menuOptions))
btnMapAll.addEventListener('click', mapAllitems)






