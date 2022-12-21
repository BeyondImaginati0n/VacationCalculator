export class Student{
    name:string;
    familyName:string;
    workingHours:{december:number,
january:number,
february:number,
march:number,
april:number,
may:number,
june:number,
july:number,
august:number,
september:number,
october:number,
november:number,
}
   get totalHours(){
        let value=0;
        for(let key of Object.values(this.workingHours)){
            value+=key;
        }
        return value;
    };
get vacationDays(){
   return Math.floor((this.totalHours*5/12)/24);
}
    constructor(name:string,familyName:string, workingHours:{december:number,
        january:number,
        february:number,
        march:number,
        april:number,
        may:number,
        june:number,
        july:number,
        august:number,
        september:number,
        october:number,
        november:number,
        }={
            december:0,
        january:0,
        february:0,
        march:0,
        april:0,
        may:0,
        june:0,
        july:0,
        august:0,
        september:0,
        october:0,
        november:0,
        }){
this.name=name;
this.familyName=familyName;
this.workingHours=workingHours;

    }
}