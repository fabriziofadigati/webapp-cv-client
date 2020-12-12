import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  
  u: User = new User();
  message: String = "";

  constructor(private loginservice: LoginService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){

    this.loginservice.login(this.u)
    .subscribe(
      data => {
        this.message = data;

        if(this.message == "Success"){
          this.router.navigate(['home']);
        }
        else  {
          alert("User not found, retry my friend");
        }
      },
      err => console.log("Error: " + err)
      
      );
      console.log(this.message);
      
      
  }

  

}
