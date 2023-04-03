import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent {
  n1!: number;
  n2!: number;
  selectN1: string = 'cm';
  selectN2: string = 'cm';

  getN1(event: any) {
    this.n1 = Number(event);
    this.convertN2(this.selectN1, this.selectN2, this.n1);
  }
  getN2(event: any) {
    this.n2 = Number(event);
  }
  getOpt1(event: any) {
    this.selectN1 = String(event);
    this.convertN2(this.selectN1, this.selectN2, this.n1);
  }
  getOpt2(event: any) {
    this.selectN2 = String(event);
    this.convertN2(this.selectN1, this.selectN2, this.n1);
  }

  convertN2(opt1: string, opt2: string, num1: number) {
    if (opt1 === 'cm' && opt2 === 'm') this.n2 = num1 / 100;
    else if (opt1 === 'cm' && opt2 === 'km') this.n2 = num1 / 100000;
    else if (opt1 === 'm' && opt2 === 'cm') this.n2 = num1 * 100;
    else if (opt1 === 'm' && opt2 === 'km') this.n2 = num1 / 1000;
    else if (opt1 === 'km' && opt2 === 'cm') this.n2 = num1 * 100000;
    else if (opt1 === 'km' && opt2 === 'm') this.n2 = num1 * 1000;
    else this.n2 = num1;
  }
}
