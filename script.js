
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showNotebooks(data)
             
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
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `
    }; 
}