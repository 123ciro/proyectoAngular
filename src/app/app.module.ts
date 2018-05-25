import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COmponentes del Proyecto
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrosComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
