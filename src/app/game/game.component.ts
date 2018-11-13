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
  cellArr=[];
  currentElemnt;
  backgroundPath = 'assets/background.png';
  zeroPath = 'assets/whitezero.png';
  xPath = 'assets/x.png';
  turn = 'x';
  currentId:string;
  currentCellNumber:number;
  constructor() { }

  ngOnInit() {
    //array init
    for ( let i = 0; i < 3; i++) {
      this.cellArr[i]=[];
      for (let j = 0; j < 3; j++) {
        this.cellArr[i][j]='default';
      }
    }
  }

  gameMove(event){
    this.currentElemnt = event.currentTarget;  //get clicked element
    //checked cell validation
    if(this.currentElemnt.children[0].src !== ("http://localhost:4200/" + this.backgroundPath)){
      return;
    }
    console.log("current target id",this.currentElemnt.attributes.id);
    console.log("current target ",this.currentElemnt.children[0].src);

    this.currentId = this.currentElemnt.attributes.id.value;
    this.currentCellNumber = parseInt(this.currentId.substring(4));
    this.cellArr[(this.currentCellNumber%10)-1][Math.floor(this.currentCellNumber/10)-1]=this.turn;//assign element value to array cell
    console.log('arr',this.cellArr);

    if (this.turn === 'x'){
      this.currentElemnt.children[0].src = this.xPath; //change image src to x
      this.turn= 'o';
      this.winCheck();
      return;
    }
    if(this.turn === 'o'){
      this.currentElemnt.children[0].src = this.zeroPath; //change image src to o
      this.turn='x';
      this.winCheck();
      return;
    }

    
  }

  winCheck(){
    console.log('winCheck');
    if(this.cellArr[0][0]==='x' && this.cellArr[0][1]==='x' && this.cellArr[0][2]==='x'){
      console.log('X win');
    }
    return;
  }
  // function identical(array) {
  //   for(var i = 0; i < array.length - 1; i++) {
  //       if(array[i] !== array[i+1]) {
  //           return false;
  //       }
  //   }
  //   return true;
  // }

}
