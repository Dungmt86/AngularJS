import {Component} from "@angular/core";

@Component({
  selector: "app-assignment2",
  templateUrl:"./assignment2.component.html"
})


export class Assignment2Component {

  array1:string[] = ["Task 1", "Task 2","Task 3","Task 4","Task 5","Task 7","Task 8","Task 10","Task 11","Task 12","Task 13","Task 15","Task 16","Task 19","Task 20","Task 21"];
  array2:string[] = ["Analyze the new requirements gathered from the customer", "Improve application perforemance","Arrange a web meeting with the customer to get new requirement","Fix the issues reported in the IE browser","Fix the issues reported by the customer","Fix the issues reported in the Safari browser","Test the application in the IE browser","Show the retieved data from the server in grid control","fix cannot open user's default database SQL error","fix the issues reported in data binding","Analyze SQL server 2008 connection","Analyze grid control","Store procedure for intial data binding of the grid","Test editing funtionality","Enhance editing","Improve the perforemance of the editing funtionality"];
  array3:string[] = ["TODO", "PROGRESS","TODO","PROGRESS","REVIEW","REVIEW","DONE","TODO","PROGRESS","REVIEW","DONE","DONE","DONE","REVIEW","TODO","PROGRESS"];

  todo1:string[] = ["Task 1","Task 3","Task 10","Task 20"];
  todo2:string[] = ["Analyze the new requirements gathered from the customer", "Arrange a web meeting with the customer to get new requirement","Show the retieved data from the server in grid control","Enhance editing"];
  todo3:string[] = ["TODO","TODO","TODO","TODO"];

  proges1:string[] = ["Task 2","Task 4","Task 11","Task 21"];
  proges2:string[] = ["Improve application perforemance","Fix the issues reported in the IE browser", "fix cannot open user's default database SQL error","Improve the perforemance of the editing funtionality"];
  proges3:string[] = ["PROGRESS","PROGRESS","PROGRESS","PROGRESS"];

  reivew1:string[] = ["Task 5","Task 7","Task 12","Task 19"];
  reivew2:string[] = ["Fix the issues reported by the customer","Fix the issues reported in the Safari browser","fix the issues reported in data binding","Test editing funtionality"];
  reivew3:string[] = ["REVIEW","REVIEW","REVIEW","REVIEW"];

  done1:string[] = ["Task 8","Task 13","Task 15","Task 16",];
  done2:string[] = ["Test the application in the IE browser","Analyze SQL server 2008 connection","Analyze grid control","Store procedure for intial data binding of the grid"];
  done3:string[] = ["DONE","DONE","DONE","DONE"];

}
