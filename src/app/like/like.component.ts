import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('like') isLiked:boolean=false;
  @Input() likesCount:number=0;
  @Output() clickIcon= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.isLiked){
      this.isLiked=false;
      this.likesCount--;
    }else{
      this.isLiked=true
      this.likesCount++;
    }
    this.clickIcon.emit(this.isLiked);
  }

}
