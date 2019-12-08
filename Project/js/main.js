(function(wind, doc) {

    'use strict';

    const app = (() => {
        let page = 0;
        return {
            initialize: () => {
                app.initProducts();
                app.initEvent();
            },
            initProducts: () => {
                app.getProducts(app.getPage());
            },
            initEvent: () => {
                app.sendFriend();
                app.moreProducts();
            },
            getProducts: (page) => {
                const ajax = new XMLHttpRequest();
                ajax.open('GET', 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=' + page);
                ajax.send();
                ajax.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        const data = JSON.parse(this.responseText).products;
                        app.response(data);
                    };
                }
            },
            response: (data) => {
                app.createCards(data);
            },
            createCards: (data) => {
                for (let cont = 1; cont <= 8; cont++)
                    app.createCard(data[cont - 1], cont);
            },
            createCard: (product, cont) => {
                const $Products = doc.querySelector('[data-js="products"]');
                $Products.innerHTML += `
                 <div id="${product.id}"class="product   card${cont}">
                   <div class="img"><img src="${product.image}"> </div>
                   <p  class="ProductName">${product.name}</p>
                   <p class="ProductDescription">${product.description}<br></p>
                   <p class="previousPrice">De: R$${product.oldPrice}</p>
                   <p class="currentPrice"> Por: R${product.price}</p>
                   <p class="installments">ou ${product.installments.count}x de R$${product.installments.value}</p>
                   <button class="purchase">Comprar</button>
                 </div>
                    `;
            },
            moreProducts: () => {
                const $moreProducts = doc.querySelector('[data-js="moreProducts"]');
                $moreProducts.addEventListener('click', app.addProducts);
            },
            addProducts: (e) => {
                e.preventDefault();
                app.getProducts(app.getPage());

            },
            getPage: () => ++page,
            sendFriend: () => {
                const $form = doc.querySelector('[data-js="form"]');
                $form.onsubmit = (event) => {
                    event.preventDefault();
                    app.cleanInput();
                    alert('Enviando com sucesso!');
                };
            },
            cleanInput: () => {
                doc.querySelector('[data-js="friendName"]').value = '';
                doc.querySelector('[data-js="friendEmail"]').value = '';
            }
        };
    })();

    app.initialize();

})(window, document)