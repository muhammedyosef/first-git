import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './hamada/product/product.component';
<<<<<<< HEAD
import { SalahComponent } from './hamada/salah/salah.component';
=======
<<<<<<< HEAD
import { JoeComponent } from './hamada/joe/joe.component';
=======
import { AshrafComponent } from './hamada/ashraf/ashraf.component';
>>>>>>> asraf
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
<<<<<<< HEAD
    SalahComponent
=======
<<<<<<< HEAD
    JoeComponent
=======
    AshrafComponent
>>>>>>> asraf
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
