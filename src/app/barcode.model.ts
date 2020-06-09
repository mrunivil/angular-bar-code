export class BarcodeModel {
  digits: number[];
  constructor() {
    this.digits = [0,5,1,0,0,0,0,1,2,5,1,7];
    // for (let i = 0; i < 12; i++) {
    //   this.digits.push(Math.floor(Math.random() * 10));
    // }
  }
  toString() {
    return this.digits.join(",");
  }
  toBinary() {
    let ret = [1, 0, 1];
    for (let i = 0; i < this.digits.length/2; i++) {
      ret = ret.concat(this.digitToBinary(this.digits[i]));
    }
    ret = ret.concat([0, 1, 0, 1, 0]);
    for (let i = this.digits.length/2; i <this.digits.length; i++) {
      ret = ret.concat(this.digitToBinary(this.digits[i]).map(b=>Math.abs(b-1)));
    }
    ret = ret.concat([1,0,1]);
    console.dir(ret)
    return ret;
  }

  digitToBinary(digit: number) {
    switch (digit) {
      case 0:
        return [0, 0, 0, 1, 1, 0, 1];
      case 1:
        return [0, 0, 1, 1, 0, 0, 1];
      case 2:
        return [0, 0, 1, 0, 0, 1, 1];
      case 3:
        return [0, 1, 1, 1, 1, 0, 1];
      case 4:
        return [0, 1, 0, 0, 0, 1, 1];
      case 5:
        return [0, 1, 1, 0, 0, 0, 1];
      case 6:
        return [0, 1, 0, 1, 1, 1, 1];
      case 7:
        return [0, 1, 1, 1, 0, 1, 1];
      case 8:
        return [0, 1, 1, 0, 1, 1, 1];
      case 9:
        return [0, 0, 0, 1, 0, 1, 1];
    }
  }
}
