import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';

import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
      private fb: FormBuilder,
      private productsService: ProductsService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
        this.builForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ( params: Params ) => {
        this.id = params.id;
        this.productsService.getProduct( this.id )
          .subscribe( product => {
            this.form.patchValue( product );
          });
      });
  }

  saveProduct( event: Event ): void {
    event.preventDefault();
    if ( this.form.value ) {
      const product = this.form.value;
      this.productsService.updateProduct( this.id, product )
        .subscribe( ( newProduct ) => this.router.navigate(['./admin/products']));
    }
    console.log(this.form.value);
  }

  private builForm(): void {
    this.form = this.fb.group({
      image: '',
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

}
