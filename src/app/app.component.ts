import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
    num: number = 0;
    ber: number = 0;
    ans: number = 0;
  
    add(): void { //added the add method with no parameters
      this.ans = this.num + this.ber; //this.(references property of the class)
    }
}
