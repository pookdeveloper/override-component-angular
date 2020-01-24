import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() data: any;
  @Output() accion = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.data = [{ name: 'pepe', lastname: 'pepin' }]
    }
  }


  alerta() {
    this.accion.emit({ accion: this.data })
  }


}
