import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){

  }
  user_id: any = ""
  user_password: any = ""
  error: boolean = false
  submit_form() {
    console.log(this.user_id, this.user_password)
    if(this.user_id == "user_123"){
      this.error = false
      this.user_password = this.user_password.toString()
      if(this.user_password == "123"){
        this.error = false
        this.router.navigate(["/project"])
      } else {
        this.error = true
      }
    } else {
      this.error = true
    }
  }


}


