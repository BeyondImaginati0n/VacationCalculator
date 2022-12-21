import { AfterContentChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { StudentsService } from '../shared/students.service';
import { ElementRef } from '@angular/core';
import { Student } from '../shared/student.model';
import { ModalService } from '../shared/modal.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
selectMonthValue:string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'familyName','workingHours','totalHours','vacationDays','buttons'];



  constructor(private studentsService:StudentsService,private modalService:ModalService,private dialog:MatDialog) {
    this.dataSource = new DataTableDataSource(this.studentsService);
  }

 deletePerson(row:any){
  this.studentsService.deleteStudentByName(row.name);
 }

 editPerson(row:any){
  this.modalService.setType('edit');
  const dialog=this.dialog.open(DialogComponent,{width:'1100px',height:'600px',data:row});
  dialog.afterClosed().subscribe(()=>{
    const index=this.studentsService.students.findIndex(elem=>{
      return elem.name==row.name;
    })
    this.studentsService.students[index]=this.studentsService.createdStudent;
  });
 }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  
}
