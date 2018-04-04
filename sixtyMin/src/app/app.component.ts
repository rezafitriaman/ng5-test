/*import from angular core lib*/
import { Component } from '@angular/core';
/*decorator define structure of componnent*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*export component where de logic is*/
export class AppComponent {
  title = 'My First Angular App!';
}
