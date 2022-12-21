import { Injectable } from "@angular/core";
import { Student } from "./student.model";
@Injectable({providedIn: 'root'})
export class StudentsService{
     students:Student[]=[new Student('Egor', 'Shevchenko', {
        december: 30,
        january: 40,
        february: 300,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }), new Student('Michael', 'Zub', {
        december: 20,
        january: 40,
        february: 29,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }),new Student('Egor', 'Shevchenko', {
        december: 30,
        january: 40,
        february: 300,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }),new Student('Michael', 'Zub', {
        december: 20,
        january: 40,
        february: 30,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }),
      new Student('Egor', 'Shevchenko', {
        december: 30,
        january: 40,
        february: 300,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }),
      new Student('Michael', 'Zub', {
        december: 20,
        january: 40,
        february: 30,
        march: 40,
        april: 30,
        may: 40,
        june: 30,
        july: 40,
        august: 30,
        september: 40,
        october: 30,
        november: 30,
      }),];

deleteStudentByName(name:any){
const index=this.students.findIndex(studentName=>{
 return studentName.name==name;
});
this.students.splice(index,1);
}

currentStudent:Student;
createdStudent:Student



}