import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
      private fb: FormBuilder,
      private productsService: ProductsService,
      private router: Router,
      private afStorage: AngularFireStorage  ) {
    this.builForm();
  }

  // createProduct(): void {
  //   const newProduct: Product = {
  //     id: '10',
  //     image: '../assets/images/banner-3.webp',
  //     title: 'New',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   };
  //   this.productsService.createProduct( newProduct )
  //     .subscribe( product => console.log( product ));
  // }

  saveProduct( event: Event ): void {
    event.preventDefault();
    if ( this.form.value ) {
      const product = this.form.value;
      this.productsService.createProduct( product )
        .subscribe( ( newProduct ) => this.router.navigate(['./admin/products']));
    }
    console.log(this.form.value);
  }

  uploadFile( event ): void {
    const file = event.target.files[0];
    console.log(file);
    const name = file.name;
    const fileRef = this.afStorage.ref(name);
    const taks = this.afStorage.upload( name, file );

    taks.snapshotChanges()
      .pipe(
        finalize( () => {
          this.image$ = fileRef.getDownloadURL();
          this.image$
            .subscribe( url => this.form.get('image').setValue( url ) );
        }))
      .subscribe();
  }

  private builForm(): void {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      image: '',
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

}
