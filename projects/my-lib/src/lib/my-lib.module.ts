import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AddComponentDirective } from './directives/add-component.directive';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


@NgModule({
  declarations: [
    MyLibComponent,
    ListadoComponent,
    AddComponentDirective,
    FormularioComponent,
    BusquedaComponent
  ],
  entryComponents:
    [
      MyLibComponent,
      ListadoComponent,
      FormularioComponent
    ]
  ,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MyLibComponent,
    ListadoComponent,
    BusquedaComponent,
    AddComponentDirective
  ]
})
export class MyLibModule { }
