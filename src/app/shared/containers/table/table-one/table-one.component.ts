import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table-one',
  template: `
    <cdk-table [dataSource]="dataSource">
      <!-- Position Column -->
      <ng-container cdkColumnDef="position">
        <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>
        <cdk-cell *cdkCellDef="let element"> {{ element.position }} </cdk-cell>
      </ng-container>

      <!-- Name Column -->
      <ng-container cdkColumnDef="name">
        <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>
        <cdk-cell *cdkCellDef="let element"> {{ element.name }} </cdk-cell>
      </ng-container>

      <!-- Weight Column -->
      <ng-container cdkColumnDef="weight">
        <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>
        <cdk-cell *cdkCellDef="let element"> {{ element.weight }} </cdk-cell>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container cdkColumnDef="symbol">
        <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>
        <cdk-cell *cdkCellDef="let element"> {{ element.symbol }} </cdk-cell>
      </ng-container>

      <ng-container cdkColumnDef="actions">
        <cdk-header-cell *cdkHeaderCellDef> Actions </cdk-header-cell>
        <cdk-cell *cdkCellDef="let element">
          <button nbButton size="small">Edit</button>
        </cdk-cell>
      </ng-container>

      <cdk-header-row *cdkHeaderRowDef="displayedColumns"></cdk-header-row>
      <cdk-row *cdkRowDef="let row; columns: displayedColumns"></cdk-row>
    </cdk-table>
  `,
  styleUrls: ['./table-one.component.scss'],
})
export class TableOneComponent {
  public readonly displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'actions',
  ];
  public dataSource = new ExampleDataSource();
  constructor() {}
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  public data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  public connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  public disconnect(): void {}
}
