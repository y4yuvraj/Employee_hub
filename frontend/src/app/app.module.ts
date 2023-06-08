import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';


export function MSAlInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId: '68d23834-4f9c-4737-80ca-d6b9b1800b3f',
      redirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddUserComponent,
    ShowUsersComponent,
    RxjsLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:MSAL_INSTANCE,useFactory:MSAlInstanceFactory},
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
