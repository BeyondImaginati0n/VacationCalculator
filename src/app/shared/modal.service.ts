import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})
export class ModalService{
modalType:string;

constructor(){
    this.modalType='add';
}
setType(value:any){
    this.modalType=value;
};

getType(){
    return this.modalType;
};

}