import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-event-emitter',
  templateUrl: './product-event-emitter.component.html',
  styleUrls: ['./product-event-emitter.component.css'],
})
export class ProductEventEmitterComponent implements OnInit {
  myEventEmitter: EventEmitter<string>;
  @Output() fireEvent: EventEmitter<string>;

  constructor() {
    this.myEventEmitter = new EventEmitter<string>();
    this.fireEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.testEvent();
    this.myEventEmitter.emit('Hello Every One .....Angular here');
  }
  testEvent() {
    this.myEventEmitter.subscribe((data) => {
      console.log(data);
    });
  }
  sendMessagetoOuterComponent() {
    console.log(' I am a Inner Component');
    this.fireEvent.emit('I am From Angular Outer  Component');
  }
}
