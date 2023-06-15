import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
 
})
export class ArticleComponent {
  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  comments: Array<any>;

  constructor(){
    this.title= ''
    this.content=''
    this.comments=[]


  }

}
