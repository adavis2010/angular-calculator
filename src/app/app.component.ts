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
  
    add(): void {
      this.ans = this.num + this.ber;
    }
}
