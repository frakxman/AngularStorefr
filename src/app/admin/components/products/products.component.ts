import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';

import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor( private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe( products => this.products = products );
  }

  // updateProduct(): void {
  //   const updateProduct: Partial<Product> = {
  //     title: 'Hoddie',
  //     price: 80000,
  //   };
  //   this.productsService.updateProduct( '2', updateProduct )
  //     .subscribe( product => console.log( product ));
  // }

  deleteProduct( id: string ): void {
    this.productsService.deleteProduct( id )
      .subscribe( response => {
        this.products = this.products.filter( product => product.id !== id );
      });
  }

}
