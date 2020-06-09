import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BarcodeModel } from "../barcode.model";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.component.html",
  styleUrls: ["./barcode.component.css"]
})
export class BarcodeComponent implements AfterViewInit {
  @ViewChild("progress") progress: ElementRef;
  barcode: BarcodeModel;
  constructor() {
    this.barcode = new BarcodeModel();
  }

  ngAfterViewInit() {
    this.animate(this.progress.nativeElement);
  }

  animate(el:HTMLElement){
let currentVal = 0;
    function step(){
      currentVal ++;
      el.style.width = currentVal + '%';
      if(currentVal<100){
        window.requestAnimationFrame(step);
      }
    }
    step();
  }
}
