import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter< any > = new EventEmitter();

    constructor( private cartService: CartService ) { }

    addToCart(): void {
        console.log('add to cart');
        // this.productClicked.emit(this.product.id);
        this.cartService.addCart( this.product );
    }
}
