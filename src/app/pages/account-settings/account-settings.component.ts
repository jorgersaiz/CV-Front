import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {

  constructor(private settingsService: SettingsService) { }

  changeColor(color: string){

    this.settingsService.changeColor(color)
    
  }

}
