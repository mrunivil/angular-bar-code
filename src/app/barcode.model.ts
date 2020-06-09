export class BarcodeModel {
  digits: number[];
  constructor() {
    this.digits = [];
    this.digits.push(0);
    for (let i = 1; i < 11; i++) {
    this.digits.push(Math.floor(Math.random() * 10));
    }
    const test =
      3 *
        (this.digits[0] +
          this.digits[2] +
          this.digits[4] +
          this.digits[6] +
          this.digits[8] +
          this.digits[10]) +
      (this.digits[1] +
        this.digits[3] +
        this.digits[5] +
        this.digits[7] +
        this.digits[9]);
    let dec = (parseInt((test / 10).toFixed(1) + "".split(".")[0]) + 1) * 10;
    this.digits.push(dec-test)
  }
  toString() {
    return this.digits.join(",");
  }
  toBinary() {
    let ret = [1, 0, 1];
    for (let i = 0; i < this.digits.length / 2; i++) {
      ret = ret.concat(this.digitToBinary(this.digits[i]));
    }
    ret = ret.concat([0, 1, 0, 1, 0]);
    for (let i = this.digits.length / 2; i < this.digits.length; i++) {
      ret = ret.concat(
        this.digitToBinary(this.digits[i]).map(b => Math.abs(b - 1))
      );
    }
    ret = ret.concat([1, 0, 1]);
    console.dir(ret);
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
