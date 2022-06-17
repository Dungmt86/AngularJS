import {Component} from "@angular/core";
import {IMail} from "../interfaces/mail.interface";
import {ICategory} from "../interfaces/category.interface";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: "app-assigment1",
  templateUrl:"./assigment1.component.html"
})

// export class Assigment1Component {
//   mails: Imail[] = [
//     {userName:'Emma Heard', subject:'Apologize for late response', shortContent:'I am here......'},
//     {userName:'Roberson', subject:'Apologize for late response', shortContent:'I am here......'},
//     {userName:'Donal Trump', subject:'US prisident', shortContent:'I am here......'},
//
//   ];
//
//   categories: ICategory[] = [
//     {name:'Favorite', childs:[{name:'imbox'},{name:'send items'}]},
//     {name:'John', childs:[{name:'imbox'},{name:'send items'},{name:'outbox'}]}
//   ];
//
// }


export class Assigment1Component {
  mails: IMail[] = [];
  categories: ICategory[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(){
    this.weatherService.mailList().subscribe(value=>{
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: IMail[] = [];
    this.weatherService.mailList().subscribe(value=>{
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })
  }
}
