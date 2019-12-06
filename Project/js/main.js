(function(wind, doc) {

    'use strict';

    const app = (() => {
        return {
            initialize: () => {
                app.initEvent();
            },
            initEvent: () => {
                app.sendFriend();
            },
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