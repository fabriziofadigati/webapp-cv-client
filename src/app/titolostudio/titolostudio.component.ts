import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Titolodistudio } from '../titolodistudio';

@Component({
  selector: 'app-titolostudio',
  templateUrl: './titolostudio.component.html',
  styleUrls: ['./titolostudio.component.css']
})
export class TitolostudioComponent implements OnInit {

  t: Titolodistudio = new Titolodistudio();
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  addTit(){
    this.loginservice.addTit(this.t);
  }




}
