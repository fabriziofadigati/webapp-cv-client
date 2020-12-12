import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { AddcvComponent } from './addcv/addcv.component';
import { EditcvComponent } from './editcv/editcv.component';

import { CertificazioneComponent } from './certificazione/certificazione.component';
import { TitolostudioComponent } from './titolostudio/titolostudio.component';
import { ProfiloComponent } from './profilo/profilo.component';

const routes: Routes = [

  { path: '', redirectTo: 'formlogin', pathMatch: 'full' },
  { path: "formlogin", component: FormloginComponent},
  { path: "home", component: HomeComponent},
  { path: "addcv", component: AddcvComponent,

      children: [
        { path: "profilo", component: ProfiloComponent},
        { path: "cert", component: CertificazioneComponent},
        { path: "titolostudio", component: TitolostudioComponent},
        { path: "**", component: ProfiloComponent }
      ]

  },
  { path: "editcv", component: EditcvComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    HomeComponent,
    ResultComponent,
    AddcvComponent,
    EditcvComponent,
    CertificazioneComponent,
    TitolostudioComponent,
    ProfiloComponent,

  ],
  
imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  
providers: [ LoginService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

