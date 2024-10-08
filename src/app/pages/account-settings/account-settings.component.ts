import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public links: any[] | NodeListOf<Element> =[];

  constructor( private settingsService:SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrenttheme();
  }

  changeTheme(theme:string){
    this.settingsService.changeTheme(theme);
  }

  
}
