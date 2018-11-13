import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  // cell={id:'',
  //   state:''  
  // };
  cellArr:string[][];
  currentElemnt;
  backgroundPath = 'assets/background.png';
  zeroPath = 'assets/whitezero.png';
  xPath = 'assets/x.png';
  turn = 'x';
  constructor() { }

  ngOnInit() {
    
  }
  gameMove(event){
    this.currentElemnt = event.currentTarget;  //get clicked element
    console.log("current target id",this.currentElemnt.attributes.id);
    console.log("current target ",this.currentElemnt.children[0].src);
    if(this.currentElemnt.children[0].src !== ("http://localhost:4200/" + this.backgroundPath)){
      console.log('in');
      return;
    }
    if (this.turn === 'x'){
      this.currentElemnt.children[0].src = this.xPath; //change image src to x
      this.turn= 'o';
      return;
    }
    if(this.turn === 'o'){
      this.currentElemnt.children[0].src = this.zeroPath; //change image src to x
      this.turn='x';
      return;
    }

    
  }

}
