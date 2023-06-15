import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
 
})
export class CommentaireComponent {

@Input()
author: string;

@Input()
content: string

constructor(){
this.author= ''
this.content= ''

}
}
