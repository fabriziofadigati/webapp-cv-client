import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { LoginService } from '../login.service';
import { User } from '../user.model';
import { Persona } from '../persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputsearch = "";
  p: Array<Persona> = [];


  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  onSearch(inputsearch: string) {
    this.inputsearch = inputsearch;
    this.loginservice.searchpersona(inputsearch).subscribe(
      data => this.p = data,
      err => console.log("Error: " + err)
      
    );
    
  }

  onLogout(){
    this.router.navigate(['formlogin']);
  }

  onAdd() {
    this.router.navigate(['addcv']);
  }

  onDelete() {

  }

  onFilter() {
    // redirect to filter page
  }

}
