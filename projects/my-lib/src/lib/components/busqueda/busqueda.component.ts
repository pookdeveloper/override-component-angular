import { Component, OnInit, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';
import { AddComponentDirective } from '../../directives/add-component.directive';
import { AddService } from '../../services/add.service';
import { AddModel } from '../../models/add-model';

@Component({
  selector: 'lib-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  @ViewChildren(AddComponentDirective) elements: QueryList<AddComponentDirective>;
  totalElementos: number = 0;
  elementos;
  insideElements: any = [];

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public addService: AddService
  ) {
    this.elementos = this.addService.getAds();
    this.totalElementos = this.elementos.length;
  }

  ngOnInit() {
    console.log(`------->: 'busqueda'`, 'busqueda');
  }

  ngAfterViewInit() {
    this.elements.forEach(
      (element, i, elements) => {

        const adItem = this.elementos[i];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        const viewContainerRef = element.viewContainerRef;
        viewContainerRef.clear();

        let componenteLocal = viewContainerRef.createComponent(componentFactory);
        (<AddModel>componenteLocal.instance).data = adItem.data;

        // Añadimos el componente par su tratamiento en el padre 
        this.insideElements.push(componenteLocal);
      }
    );
    this.detectChanges();
  }


  detectChanges() {
    /*     this.insideElements[this.totalElementos - 1].instance.accion.subscribe((data) => {
          console.log(`------->: data`, data);
          // BORRAMOS EL REGISTRO 
        }); */
  }

  cambiar() {
    (<AddModel>this.insideElements[this.totalElementos - 1].instance).data = [
      { name: Math.random(), lastname: Math.random() },
      { name: Math.random(), lastname: Math.random() },
      { name: Math.random(), lastname: Math.random() }
    ];
  }


}
