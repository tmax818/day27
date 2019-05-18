import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  serverName = '';
  show = false;
  message = '';

  onExpression(e) {
    console.log(e);
    if (e.altKey) {
      (this.message = 'Good Job!!') && (this.show = true);
    } else if (e.ctrlKey) {
      this.message = "That's the 'control-key,' I said the 'ALT' key!!!";
    } else {
      this.message = "No, the hold down the 'alt' key!!!!";
    }
  }
  constructor() {}

  ngOnInit() {}
}
