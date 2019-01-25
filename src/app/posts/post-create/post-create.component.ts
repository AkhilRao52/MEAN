import { Component } from '@angular/core';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    // Ng Model 2-way data binding
    textAreaInput = " "; 
    newPost = " ";

    onAddPost(){
        this.newPost = this.textAreaInput;
    }
}