import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

}
