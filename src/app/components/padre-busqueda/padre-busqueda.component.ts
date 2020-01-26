import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BusquedaComponent, AddService } from 'projects/my-lib/src/public-api';
/* import { CustomComponent } from './custom-component';
 */
@Component({
  selector: 'app-padre-busqueda',
  templateUrl: './padre-busqueda.component.html',
  styleUrls: ['./padre-busqueda.component.scss']
})
export class PadreBusquedaComponent extends BusquedaComponent implements OnInit {

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public addService: AddService
  ) {
    super(componentFactoryResolver, addService);

  }

  ngOnInit() {
    debugger;
    console.log(`------->: 'padre'`, 'padre');
    /*  console.log(`------->:     super.ngOnInit();`, super.ngOnInit()); */
  }

}
