import { Component } from '@angular/core';
import { Box } from './box/box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demo - the validation for box sizes';
  public box: Box = {
    height: 1000,
    width: 1000
  };
}
