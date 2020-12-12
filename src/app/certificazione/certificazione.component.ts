import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Certificazione } from '../certificazione';

@Component({
  selector: 'app-certificazione',
  templateUrl: './certificazione.component.html',
  styleUrls: ['./certificazione.component.css']
})
export class CertificazioneComponent implements OnInit {

  c: Certificazione;

  constructor(public loginservice: LoginService) {
    
  }

  ngOnInit(): void {

    this.c = new Certificazione();
  }

  addCert(){
    this.loginservice.addCert(this.c);
  }


}
