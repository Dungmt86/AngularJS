import {Component} from "@angular/core";
import {WeatherService} from "../services/weather.service";
import {user} from "../interfaces/user.interface";
import {contact} from "../interfaces/contact.interface";

@Component({
  selector: "app-practiveexam",
  templateUrl:"./practiveexam.component.html"
})

export class PractiveexamComponent {
  user: user[] = [];
  contact: contact[] = [];
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(){
    this.weatherService.contactList().subscribe(value => {
      this.user = value.data.user;
      this.contact = value.data.contact;
    })
  }

}
