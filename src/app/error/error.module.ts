import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './components/error.component';

import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        ErrorComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ErrorRoutingModule
    ]
})
export class ErrorModule {}
