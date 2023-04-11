import { Component } from '@angular/core';


//meta-data
//app root- write code that is true for all the components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//write the logic about component
//code for specific components
export class AppComponent {
  title = 'my-first-project';
}

