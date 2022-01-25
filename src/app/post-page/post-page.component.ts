import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  posts:any[]=[
    {
    title:'ABC',
    isLiked:true,
    likesCount:1
    },
    {
      title:'PQR',
      isLiked:false,
      likesCount:100
    },
    {
      title:'XYZ',
      isLiked:true,
      likesCount:100
    }
  ]
  constructor() { }

  ngOnInit(): void {
  
  }
  onClick(){
    
  }
  iconClicked(value:any){
    console.log("I'm being called in Post page "+value);
  }
}
