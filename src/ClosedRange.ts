export class ClosedRange {
  /**
   * 下端点が上端点より大きい時、例外
   *
   * @throws Error
   */
  constructor(public min: number, public max: number) {
    if (min > max) {
      throw new Error();
    }
  }

  /**
   * 閉区間を文字列表記で返す
   */
  toString() {
    return `[${this.min},${this.max}]`;
  }

  /**
   * 閉区間が引数の数字を含むかどうか
   * 条件: 引数が下端点以上かつ上端点以下であるか
   */
  includes(num: number) {
    return this.min <= num && num <= this.max;
  }

  /**
   * 引数の閉区間と一致していること
   */
  isEqualTo(another: ClosedRange) {
    return this.min === another.min && this.max === another.max;
  }

  /**
   * 引数の閉区間を含むこと
   */
  contains(another: ClosedRange) {
    return this.min <= another.min && another.max <= this.max;
  }
}
