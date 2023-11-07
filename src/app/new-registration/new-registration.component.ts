import { Component, Renderer2 } from '@angular/core';
import { new_users } from './new-registration.json';
@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent {
  new_users=new_users
  constructor(private renderer: Renderer2) { }

  change() {
      const parent: any = document.getElementById('file');
      // const child = parent.children[0];//--mdc-linear-progress-active-indicator-color
      this.renderer.setStyle(parent, 'background-color', 'green');
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
}
