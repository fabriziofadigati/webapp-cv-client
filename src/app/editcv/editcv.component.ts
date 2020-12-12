import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-editcv',
  templateUrl: './editcv.component.html',
  styleUrls: ['./editcv.component.css']
})
export class EditcvComponent implements OnInit {
  
  p: Persona;
  message: String;

  constructor(private router: Router, private loginservice: LoginService ) { }

  ngOnInit(): void {
    
    this.p = new Persona();
    this.p = history.state;
    alert(this.p.codicefiscale);
  
  }

  onEdit(){
    this.loginservice.editpersona(this.p).subscribe(
      data => {this.message = data; alert(this.message)},
      err => console.log("Error: " + err)
    );
  }
  
  onLogout(){
    this.router.navigate(['formlogin']);
  }
  
  Back(){
  	this.router.navigate(['home']);
  }

}
