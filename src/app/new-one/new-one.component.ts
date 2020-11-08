import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  @Input()
  title = 'new-one-title';

  @Input("t")
  title1 = 'new-one-title1';

  @Output()
  onchange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  change(val?: string) {
    this.onchange.emit(val);
    console.log(val);
  }
}
