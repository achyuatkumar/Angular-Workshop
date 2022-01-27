import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId:any;
  constructor(private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params=>{
        this.postId=params.get('postId');
    })
  }

  ngOnInit(): void {
  }

}
