import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from "@angular/core";
import { BarcodeModel } from "../barcode.model";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.component.html",
  styleUrls: ["./barcode.component.css"]
})
export class BarcodeComponent implements AfterViewInit {
  @ViewChildren('digits')digits:QueryList<ElementRef>;
  progress=35;
  barcode: BarcodeModel;
  constructor() {
    this.barcode = new BarcodeModel();
  }

  onModelChange(){
    const index = Math.floor(this.digits.length/100*this.progress);
    this.digits.forEach((digit, i)=>{
      const el:HTMLElement = digit.nativeElement;
      if(i < index && el.classList.contains('d-1')){
        el.style.background = '#C51718'
      }
    })
  }

  ngAfterViewInit() {
   this.onModelChange();
  }
}
