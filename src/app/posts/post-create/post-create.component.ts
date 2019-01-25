import { Component } from '@angular/core';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
    textAreaInput = " ";
    newPost = "Rafa vs Novak";

    onAddPost(){
        this.newPost = this.textAreaInput;
    }
}