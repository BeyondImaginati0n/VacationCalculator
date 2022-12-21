import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ModalService } from '../shared/modal.service';
import { StudentsService } from '../shared/students.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dialog:MatDialog,private studentsService:StudentsService,private modalService:ModalService) { }
openDialog(){
  this.modalService.setType('add');
 const dialog=this.dialog.open(DialogComponent,{width:'1100px',height:'600px'});
 dialog.afterClosed().subscribe((result)=>{
  this.studentsService.students.push(this.studentsService.createdStudent);
 });
}

  ngOnInit(): void {
  }

}
