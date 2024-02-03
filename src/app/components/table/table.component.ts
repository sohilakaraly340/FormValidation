import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service';
import { IUsers } from '../../modules/Iuser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit  {
  tableData: IUsers[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tableData=this.dataService.getData()
  }
}
