import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes del Proyecto
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesService } from './paises.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrosComponent,
    FooterComponent,
    PaisesComponent,
    PostComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
