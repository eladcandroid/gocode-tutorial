import { Component, OnInit } from '@angular/core';

import { productsData } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = productsData;

  constructor() {}

  ngOnInit(): void {}

  share(productName) {
    window.alert('The product ' + productName + ' has been shared!');
  }

  onNotify(productName) {
    window.alert(
      'You will be notified when the product ' + productName + ' goes on sale'
    );
  }
}
