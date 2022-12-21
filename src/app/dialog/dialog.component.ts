import { Component, OnInit, Inject, AfterContentChecked } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { StudentsService } from '../shared/students.service';
import { ModalService } from '../shared/modal.service';
import { Student } from '../shared/student.model';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterContentChecked {
  reactiveForm: FormGroup;

  selectedMonth: string;

  modalHeaderContent: string;

  totalHours: number

  @ViewChild('select') select: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private studentsService: StudentsService, private modalService: ModalService) {
    if (this.modalService.getType() == 'add') {
      this.modalHeaderContent = 'Add New Person Vacation';
    } else {
      this.modalHeaderContent = 'Edit Person Vacation';
    }
    this.totalHours=0;
  }

  ngOnInit(): void {
    if (this.modalService.getType() == 'add') {
      this.reactiveForm = new FormGroup({
        name: new FormControl(),
        familyName: new FormControl(),
        workingHours: new FormControl(),
        december: new FormControl(0),
        january: new FormControl(0),
        february: new FormControl(0),
        march: new FormControl(0),
        april: new FormControl(0),
        may: new FormControl(0),
        june: new FormControl(0),
        july: new FormControl(0),
        august: new FormControl(0),
        september: new FormControl(0),
        october: new FormControl(0),
        november: new FormControl(0),
      });
    } else {
      this.reactiveForm = new FormGroup({
        name: new FormControl(this.data.name),
        familyName: new FormControl(this.data.familyName),
        workingHours: new FormControl(this.data.workingHours),
        december: new FormControl(this.data.workingHours.december),
        january: new FormControl(this.data.workingHours.january),
        february: new FormControl(this.data.workingHours.february),
        march: new FormControl(this.data.workingHours.march),
        april: new FormControl(this.data.workingHours.april),
        may: new FormControl(this.data.workingHours.may),
        june: new FormControl(this.data.workingHours.june),
        july: new FormControl(this.data.workingHours.july),
        august: new FormControl(this.data.workingHours.august),
        september: new FormControl(this.data.workingHours.september),
        october: new FormControl(this.data.workingHours.october),
        november: new FormControl(this.data.workingHours.november),
      });
    }

    setInterval(() => {
      this.selectedMonth = this.select.nativeElement.value;
    }, 100);

  }

  ngAfterContentChecked(): void {
  
  }

  save() {
    this.studentsService.createdStudent = new Student(this.reactiveForm.value.name, this.reactiveForm.value.familyName, {
      december: +this.reactiveForm.value.december,
      january: +this.reactiveForm.value.january,
      february: +this.reactiveForm.value.february,
      march: +this.reactiveForm.value.march,
      april: +this.reactiveForm.value.april,
      may: +this.reactiveForm.value.may,
      june: +this.reactiveForm.value.june,
      july: +this.reactiveForm.value.july,
      august: +this.reactiveForm.value.august,
      september: +this.reactiveForm.value.september,
      october: +this.reactiveForm.value.october,
      november: +this.reactiveForm.value.november,
    });
    this.dialog.closeAll();
  }

}
