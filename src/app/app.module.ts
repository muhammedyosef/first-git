import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './hamada/product/product.component';
import { SalahComponent } from './hamada/salah/salah.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SalahComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
