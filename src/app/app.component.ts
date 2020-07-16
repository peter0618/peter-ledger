import {Component, OnInit, ViewChild} from '@angular/core';
declare var RealGridJS;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridView;
  gridDataProvider;

  ngOnInit(): void {
    this.gridView = new RealGridJS.GridView('realgrid');  // html 선언ID
    this.gridDataProvider = new RealGridJS.LocalDataProvider();
    this.gridView.setDataSource(this.gridDataProvider);

    this.gridDataProvider.setFields([
      {
        fieldName: 'date',
        dataType: 'datetime',
      },
      {
        fieldName: 'item',
      },
      {
        fieldName: 'note',
      },
      {
        fieldName: 'income',
      },
      {
        fieldName: 'expenditure',
      },
      {
        fieldName: 'balance',
        dataType: 'number'
      },
    ]);

    this.gridView.setColumns([
      {
        name: 'date',
        fieldName: 'date',
        editable: true,
        header: {
          text: '일자',
        },
        editor: {
          type: 'date',
          maxLength: 6,
          yearNavigation: true,
        },
        width: '100',
      },
      {
        name: 'item',
        fieldName: 'item',
        editable: true,
        header: {
          text: '항목',
        },
        type: 'data',
        width: '150',
      },
      {
        name: 'note',
        fieldName: 'note',
        editable: true,
        header: {
          text: '비고',
        },
        type: 'data',
        width: '400',
      },
      {
        name: 'income',
        fieldName: 'income',
        editable: true,
        header: {
          text: '수입',
        },
        type: 'data',
        width: '100',
      },
      {
        name: 'expenditure',
        fieldName: 'expenditure',
        editable: true,
        header: {
          text: '지출',
        },
        type: 'data',
        width: '100',
      },
      {
        name: 'balance',
        fieldName: 'balance',
        editable: true,
        header: {
          text: '잔액',
        },
        type: 'data',
        width: '100',
        style: {
          textAlignment: 'far',
          numberFormat: '#,##0'
        },
      },
    ]);

    this.gridDataProvider.setRows([
      {
        date: '2020/07/01',
        item: '예산 외 항목 지출',
        note: '간식(라면24개)',
        income: null,
        expenditure: '14870',
        balance: '616324',
      }
    ]);

    this.gridView.setPasteOptions({
      enabled: true
    });
  }



}
