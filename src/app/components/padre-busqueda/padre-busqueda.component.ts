import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BusquedaComponent, AddService } from 'projects/my-lib/src/public-api';
/* import { CustomComponent } from './custom-component';
 */
/* @Component({
  selector: 'app-padre-busqueda',
  templateUrl: './padre-busqueda.component.html',
  styleUrls: ['./padre-busqueda.component.scss']
}) */
/* @Component({
  selector: 'app-padre-busqueda'
}) */


const myPanelComponentOptions = Object.assign({}, BusquedaComponent, {
  selector: 'app-padre-busqueda',
  templateUrl: '../../projects/my-lib/src/lib/components/busqueda/busqueda.component.html',
  styleUrls: []
});
@Component(myPanelComponentOptions)

export class PadreBusquedaComponent extends BusquedaComponent implements OnInit {

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public addService: AddService
  ) {
    super(componentFactoryResolver, addService);

  }

  ngOnInit() {
  }

}
