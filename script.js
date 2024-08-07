const url = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showNotebooks(data);
            bComprar();
                             
        })
        .catch(error => {
            console.log("Erro,Tente novamente mais tarde!")
        });

function showNotebooks (data) {
    for (let i = 0; i < data.results.length; i++) {    
        // console.log(data.results[i].title)
        // console.log(data.results[i].price)
        document.getElementById('container').innerHTML += 
        `<div class="col d-flex justify-content-center">
                <div class="card mb-5" style="width: 14rem;">
                    <img src="${data.results[i].thumbnail} " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.results[i].title}</h5>
                        <p class="card-text">${data.results[i].price}</p>
                        <button  href="#" data-title="${data.results[i].title}" data-price="${data.results[i].price}" class="btn btn-primary bComprar">Comprar</button>
                    </div>
                </div>
            </div>
        `
    }; 
};

function bComprar (){
    const botaoComprar = document.getElementsByClassName('bComprar');
    for (i = 0; i < botaoComprar.length; i++) {
    botaoComprar[i].addEventListener('click',addCart);
    }
}

function addCart(event) {
    // event target é o elemento que disparou o evento
    const botao = event.target;
    const modeloNotebook = botao.getAttribute('data-title');
    const precoNotebook = botao.getAttribute('data-price');
    const notebook = {
        modelo: modeloNotebook,
        preco: precoNotebook
    };
    console.log(notebook)
    //colocar o notebook dentro do carrinho
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(notebook);
    localStorage.setItem('cart', JSON.stringify(cart));
};
