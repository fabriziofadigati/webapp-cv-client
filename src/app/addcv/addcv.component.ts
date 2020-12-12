import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-addcv',
  templateUrl: './addcv.component.html',
  styleUrls: ['./addcv.component.css']
})
export class AddcvComponent implements OnInit {

  p: Persona = new Persona();
  message: String;

  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    /*
    this.loginservice.addcv(this.p)
    .subscribe(
      data => { this.message = data; 
        if(this.message == "CV has been added"){
          alert("Nuovo CV aggiunto con successo! :-)");
        
        }
        else  {
          alert("Errore nell'invio del CV");
        } 
      },
      err => console.log("Error: " + err)
      
      );
      console.log(this.message);
      */
      
    
  }
  
  onLogout(){
    this.router.navigate(['formlogin']);
  }
  
  Back(){
  	this.router.navigate(['home']);
  }

 

}
