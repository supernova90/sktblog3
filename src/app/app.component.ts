import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'sktblog3';
  articles : Array<any>

  constructor() {
    this.articles= [
      {title: 'myblog1', content: 'hello1', comments:[{author: 'user1', content: 'nice'}]},
      {title: 'myblog2', content: 'hello2', comments:[{author: 'user2', content: 'nice'}]},
      {title: 'myblog3', content: 'hello3', comments:[{author: 'user3', content: 'nice'}]},
      {title: 'myblog4', content: 'hello4', comments:[{author: 'user4', content: 'nice'}]}
    ]

  }
}
