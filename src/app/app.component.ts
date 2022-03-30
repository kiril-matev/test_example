import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  template: `<ag-grid-angular
    style="width: 500px; height: 500px;"
    class="ag-theme-alpine"
    [rowData]="rowData"
    [columnDefs]="columnDefs"
>
</ag-grid-angular>`,
})
export class AppComponent {

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
