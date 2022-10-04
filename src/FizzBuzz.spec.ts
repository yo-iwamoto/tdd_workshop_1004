import { describe, expect, test } from 'vitest';
import { FizzBuzz } from './FizzBuzz';

const fizzBuzz = new FizzBuzz();

describe('数値変換を行うFizzBuzz', () => {
  describe('3の倍数の時Fizzに変換する', () => {
    test('3を渡すとFizzを返す', () => {
      expect(fizzBuzz.convert(3), 'Fizz');
    });
  });

  describe('5の倍数の時Buzzに変換する', () => {
    test('5を渡すとBuzzを返す', () => {
      expect(fizzBuzz.convert(5), 'Buzz');
    });
  });

  describe('その他の数値はそのまま文字列に変換する', () => {
    test('1を渡すと文字列の1を返す', () => {
      expect(fizzBuzz.convert(1), '1');
    });
  });
});
