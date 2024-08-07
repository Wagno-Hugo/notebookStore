function displayCartItems()  {
    let showCart = JSON.parse(localStorage.getItem('cart'));
    // console.log(showCart)
    let total = 0;
    if(showCart !== null) {
        
        for (let i = 0; i < showCart.length; i++) {
            total += parseFloat(showCart[i].preco)
            console.log(total)
            document.getElementById('containerCart').innerHTML += 
            `
            <p><b>Item:</b> ${showCart[i].modelo} | <b>R$:</b> ${showCart[i].preco} </p>
            <hr>
            `
        }
    } else {
        console.log('vazio');
    }
    document.getElementById('containerCart').innerHTML += 
    `
    <p><b>Valor total do pedido R$:</b> ${total.toFixed(2)}</p>
    <button onclick="finalizarPedido()" href="#" class="btn btn-primary btn-lg mt-3">Finalizar Pedido</button>
    `
};
displayCartItems();

function finalizarPedido() {
    localStorage.clear('cart');
    alert("Pedido finalizado com Sucesso!");
    window.location = 'index.html';
};