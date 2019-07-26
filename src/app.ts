import 'bootstrap/dist/css/bootstrap.min.css';
import './public/scss/main.scss';

import * as Products from './modules/products';

let init = () => {
  Products.init();
}

(function () {
  init();
})();