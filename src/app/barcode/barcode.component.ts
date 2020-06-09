import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList
} from "@angular/core";
import { BarcodeModel } from "../barcode.model";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.component.html",
  styleUrls: ["./barcode.component.css"]
})
export class BarcodeComponent implements AfterViewInit {
  @ViewChildren("digits") digits: QueryList<ElementRef>;
  progressValue = 0;
  barcode: BarcodeModel;
  constructor() {
    this.barcode = new BarcodeModel();
  }

  onModelChange() {
    const tmp = this.digits;
    const tmpP = this.progressValue;
    window.requestAnimationFrame(() => {
      const index = Math.floor((tmp.length / 100) * tmpP);
      tmp.forEach((digit, i) => {
        const el: HTMLElement = digit.nativeElement;
        if (i < index && el.classList.contains("d-1")) {
          el.style.background = "#C51718";
        }
        if(i>= index && el.classList.contains('d-1')){
          el.style.background = "#333333";
        }
      });
    });
  }

  ngAfterViewInit() {
    this.onModelChange();
  }
}
