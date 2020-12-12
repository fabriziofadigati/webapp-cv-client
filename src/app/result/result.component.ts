import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Persona } from '../persona';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() foundpeople: Persona[];
  message: String;

  
  
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

  removecv(person: Persona){
    const index = this.foundpeople.indexOf(person);
    this.foundpeople.splice(index, 1);
    this.loginservice.removepersona(person.idPersona).subscribe(
      data => {this.message = data; alert(this.message)},
      err => console.log("Error: " + err)
    );
    
  }

  editcv(person: Persona){
    this.router.navigateByUrl('/editcv', {state: person});
  }


}
