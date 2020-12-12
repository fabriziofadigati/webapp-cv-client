import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Certificazione } from '../certificazione';
import { Titolodistudio } from '../titolodistudio';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  
  persona: Persona = new Persona();
  certificazioniob: Observable<Array<Certificazione>>;
  titoliob: Observable<Array<Titolodistudio>>;
  message: String;

  certificazioni: Array<Certificazione>;
  titoli: Array<Titolodistudio>;


  constructor(public loginservice: LoginService) {

    
   }

  ngOnInit(): void {
    
    

    this.message = "";
    this.certificazioniob.subscribe( c =>
      this.certificazioni = c as Array<Certificazione>
    );
    this.titoliob.subscribe( t =>
      this.titoli = t as Array<Titolodistudio>
    );

    
  }


  onSubmit(){
    
    this.loginservice.addcv().subscribe(
      data => {this.message = data; alert(this.message)},
      err => console.log("Error: " + err)
    )
    
  }

  removeTit(t: Titolodistudio){

    this.loginservice.removeTit(t);
    alert("Titolo eliminato!");
    
  }

  removeCert(c: Certificazione){
    this.loginservice.removeCert(c);
    alert("Certificazione rimossa!");
  }

}
