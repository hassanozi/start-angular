import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  src : string = '';
  textT : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  imageSource(i: number)
  {
      if (i == 1) {
        this.src = '../../assets/portfolio1-2.jpg';
      }
      else if (i == 2) {
        this.src = '../../assets/portfolio1-3.jpg';
      }
      else if (i == 3) {
        this.src = '../../assets/portfolio1-4.jpg';
      }
      else if (i == 4) {
        this.src = '../../assets/portfolio1-5.jpg';
      }
      else if (i == 5) {
        this.src = '../../assets/portfolio1-6.jpg';
      }
      else if (i == 6) {
        this.src = '../../assets/portfolio1-7.jpg';
      }
      
  }

  titleText(i:number){
    if (i == 1) {
      this.textT = 'LOG CABIN';
    }
    else if (i == 2) {
      this.textT = 'TASTY CAKE';   }
    else if (i == 3) {
      this.textT = 'CIRCUS TENT';    }
    else if (i == 4) {
      this.textT = 'CONTROLLER';    }
    else if (i == 5) {
      this.textT = 'LOCKED SAFE';    }
    else if (i == 6) {
      this.textT = 'SUBMARINE';    }
  }



}
