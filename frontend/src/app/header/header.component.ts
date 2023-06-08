import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _msalService: MsalService) { }

  ngOnInit(): void {
    this._msalService.instance.handleRedirectPromise().then(
      res=> {
        if(res!=null && res.account!=null)
        {
          this._msalService.instance.setActiveAccount(res.account)
        }
      }
    )
  }

  login(){
    this._msalService.loginRedirect();
  }

  logout()
  {
    this._msalService.logout();
  }

  get loggedIn()
  {
    return this._msalService.instance.getActiveAccount()!=null;
  }
}
