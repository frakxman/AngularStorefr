import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor( private route: ActivatedRoute, private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(( params: Params ) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct( id );
    });
  }

  fetchProduct( id: string ): void {
    this.productsService.getProduct( id )
      .subscribe( product => this.product = product );
  }

}

// this.product = product