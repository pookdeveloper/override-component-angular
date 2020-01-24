import { Injectable } from '@angular/core';
import { ListadoComponent } from '../components/listado/listado.component';
import { AdItem } from '../models/add-item';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  getAds() {
    return [
      new AdItem(FormularioComponent, null),
      new AdItem(ListadoComponent, [{ name: 'trocon', lastname: 'troquin' }]),
      new AdItem(ListadoComponent, [{ name: 'trocon', lastname: 'troquin' }]),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
