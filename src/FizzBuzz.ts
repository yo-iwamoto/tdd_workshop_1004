export class FizzBuzz {
  /**
   * @param num 自然数
   *
   * @returns 3の倍数のときFizz、5の倍数のときBuzz、3と5の倍数のときFizzBuzz、それ以外のとき文字列
   */
  convert(num: number) {
    const words: string[] = [];

    if (num % 3 === 0) {
      words.push('Fizz');
    }
    if (num % 5 === 0) {
      words.push('Buzz');
    }

    if (words.length === 0) {
      return num.toString();
    }

    return words.join('');
  }
}
