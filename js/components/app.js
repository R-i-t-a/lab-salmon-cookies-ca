'use strict';

(function(module) {
    let html = module.html;
    let StoreList = module.StoreList;
    let StoreForm = module.StoreForm;
    let storeApi = module.storeApi;



    let template = function() {
        return html`
            <header>
                <h1>Sales</h1>
            </header>

            <main></main>
        `;
    };

    function fn() {
        let test = 'hello world';
        console.log('test:', test);
    }

    fn();

    class App {
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let stores = storeApi.get();

            let storeList = new StoreList({
                stores: stores
            });

            let storeForm = new StoreForm({
                onAdd: (store) => {
                    storeApi.add(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            main.appendChild(storeList.render());
            main.appendChild(storeForm.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});