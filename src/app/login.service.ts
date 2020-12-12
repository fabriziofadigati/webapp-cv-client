import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse } from '@angular/common/http';
import { User } from './user.model';
import { Persona } from './persona';
import { Certificazione } from './certificazione';
import { Titolodistudio } from './titolodistudio';
import { BehaviorSubject } from 'rxjs';
import { CV } from './cv';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login_url = 'http://localhost:8080/loginuser';
  addcv_url = 'http://localhost:8080/addcv';
  searchpersona_url = 'http://localhost:8080/searchpeople';
  removepersona_url = 'http://localhost:8080/removepeople';
  editpersona_url = 'http://localhost:8080/editpeople';

   public p = new Persona();
   private c = new BehaviorSubject<Array<Certificazione>>(new Array<Certificazione>());
   private t = new BehaviorSubject<Array<Titolodistudio>>(new Array<Titolodistudio>());
   private curriculum: CV;
  
   httpOptions = {
    headers: new HttpHeaders({     
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    })
  };

  ngOnInit(): void {

  }
 
  
  constructor(private http: HttpClient) {

  }

  addCert(cert: Certificazione){
    const certs = [cert, ...this.c.getValue()];
    this.c.next(certs);  
  }

  addTit(tit: Titolodistudio){
    const tits = [tit, ...this.t.getValue()];
    this.t.next(tits); 
  }

  getAllCert(){
    return this.c.asObservable();
  }

  getAllTit(){
    return this.t.asObservable();

  }

  removeCert(cert: Certificazione){
    const certs = this.c.getValue().filter(ct => ct !== cert);
    this.c.next(certs);
  }

  removeTit(tit: Titolodistudio){
    const tits = this.t.getValue().filter(tt => tt !== tit);
    this.t.next(tits);
  }


  login(u: User){    
    return this.http.post<String>(this.login_url, u, this.httpOptions);
  }

  addcv(){
    
    return this.http.post<String>(this.addcv_url, this.curriculum, this.httpOptions);
  }

  searchpersona(t: String){
    return this.http.get<Array<Persona>>(this.searchpersona_url + "?term=" + t);
  
  }

  editpersona(p: Persona){
    return this.http.post<String>(this.editpersona_url, p, this.httpOptions);
  }

  removepersona(id: number){
    return this.http.post<String>(this.removepersona_url, id, this.httpOptions);
  }
  
}
