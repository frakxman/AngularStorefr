import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    // {
    //   id: '1',
    //   image: '../assets/images/camiseta.png',
    //   title: 'T-shirt',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '2',
    //   image: '../assets/images/hoodie.png',
    //   title: 'Hoodie',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '3',
    //   image: '../assets/images/mug.png',
    //   title: 'Mug',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '4',
    //   image: '../assets/images/pin.png',
    //   title: 'Pin',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '5',
    //   image: '../assets/images/stickers1.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '6',
    //   image: '../assets/images/stickers2.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // }
  ];

  constructor( private productsService: ProductsService) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct( id: number ): void {
    console.log('product');
    console.log(id);
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe( products => this.products = products );
  }
}
