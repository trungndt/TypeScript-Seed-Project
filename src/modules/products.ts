declare let require;
let $ = require('jquery');

import * as Config from '../utils/config';
import * as API from '../utils/api-local';
import { Product } from '../models/Product';

let generateProducts = () => {
  let data = API.getProducts();
  data.forEach((product: Product) => {
    let $tmp = $($('#tmpProduct').html().trim());
    $tmp.find('.card-title').html(product.name);
    $tmp.find('.price').html(product.price + 'đ');
    $tmp.find('img').attr('src', Config.CONST.BASE_URL + product.imageUrl);

    $('#pnlProducts').append($tmp);
  })
}

export let init = () => {
  generateProducts();
};