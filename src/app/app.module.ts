import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { PadreBusquedaComponent } from './components/padre-busqueda/padre-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreBusquedaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MyLibModule
  ],
  providers: [
    /* {
      class: GenericService,
      useValue: MiNuevoGenericService
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
