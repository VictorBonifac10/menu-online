console.log(menuOptions)

const btnShowOptions = document.querySelector('#show-all')
const btnAddAll = document.querySelector('#add-all')
const btnVeganOptions = document.querySelector('#only-vegan')
const btnDescontPrice = document.querySelector('#descont')
const showValueAll = document.querySelector('.showValueAll')
const foodCard = document.querySelector('ul');


function showOptions() {

    foodCard.innerHTML = ''; // limpa os itens antigos

    menuOptions.forEach((menuOptions, i) => {

        foodCard.innerHTML += //exibe todos os itens do array

        `

        <li>
            <img src="${menuOptions.src}" alt="burguer">
            <p>${menuOptions.name}</p>
            <p class="item-price">R$${menuOptions.price},00</p>
        </li>

        `
    });
}

function addAll() {
    console.log('tá somando tudo')

    const funcAdd = menuOptions.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    showValueAll.innerHTML = `O valor de todos os hamburgers é: R$${funcAdd},00`
}

function veganOptions() {

    foodCard.innerHTML = ''; // limpa os itens antigos

    const veganBurguer = menuOptions.filter(item => {
        if (item.vegan === true) {

            foodCard.innerHTML += //exibe todos os itens do array

    `
        <li>
            <img src="${item.src}" alt="burguer">
            <p>${item.name}</p>
            <p class="item-price">R$${item.price},00</p>
        </li>

    `

        }
    })
}

function descontPrice() { // revisar

    const foodCard = document.querySelector('ul');
    foodCard.innerHTML = ''; // limpa os itens antigos

    const porcent = menuOptions.map(item => {
        const lowprice = item.price - (item.price / 10)
        return lowprice
    })

     menuOptions.forEach((item, i) => {
        foodCard.innerHTML += `
            <li>
                <img src="${item.src}" alt="burguer">
                <p>${item.name}</p>
                <p class="item-price">R$${porcent[i].toFixed(2)}</p>
            </li>
        `;
    });

}

btnShowOptions.addEventListener('click', showOptions)
btnAddAll.addEventListener('click', addAll)
btnVeganOptions.addEventListener('click', veganOptions)
btnDescontPrice.addEventListener('click', descontPrice)

