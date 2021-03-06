import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.messages.subscribe((msg) => {
      console.log(msg);
    });
  }

  sendMessage() {
    this.chat.sendMsg('Test Message');
  }
}
