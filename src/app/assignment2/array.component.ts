import {Component, Input} from "@angular/core";
@Component({
  selector:"app-array",
  templateUrl:"./array.component.html"
})
export class ArrayComponent{

  @Input("array1")    array1 !:string;
  @Input("array2")    array2 !:string;
  @Input("array3")    array3 !:string;

  @Input("todo1")    todo1 !:string;
  @Input("todo2")    todo2 !:string;
  @Input("todo3")    todo3 !:string;

  @Input("proges1")    proges1 !:string;
  @Input("proges2")    proges2 !:string;
  @Input("proges3")    proges3 !:string;

  @Input("review1")    review1 !:string;
  @Input("review2")    review2 !:string;
  @Input("review3")    review3 !:string;

  @Input("done1")    done1 !:string;
  @Input("done2")    done2 !:string;
  @Input("done3")    done3 !:string;
}
