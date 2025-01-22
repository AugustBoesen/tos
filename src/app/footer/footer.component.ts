import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  host = 'WIZARD';
  randomChars =
    '!"#¤%&/()=?`+*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  sessionTime: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      // Generate a random letter string from randomChars that is 5 letters long and assign it to host;
      let generatedString = '';
      for (let i = 0; i < 6; i++) {
        generatedString += this.randomChars.charAt(
          Math.floor(Math.random() * this.randomChars.length)
        );
      }
      this.host = generatedString;
    }, 200);

    setInterval(() => {
      // Increment sessionTime every minute
      this.sessionTime++;
    }, 60000);
  }

  ngOnDestroy() {
    clearInterval(this.sessionTime);
  }
}
