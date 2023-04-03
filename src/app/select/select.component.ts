import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  value: string = 'Centímetros(cm)';

  @Output() sendValue = new EventEmitter();

  onChange() {
    this.sendValue.emit(this.value);
  }
}
