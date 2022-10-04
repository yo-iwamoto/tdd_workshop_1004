import { describe, expect, it } from 'vitest';
import { FizzBuzz } from './FizzBuzz';

const fizzBuzz = new FizzBuzz();

describe('数値変換を行うFizzBuzz', () => {
  describe('3の倍数の時Fizzに変換する', () => {
    it('3を渡すとFizzを返す', () => {
      expect(fizzBuzz.convert(3)).toBe('Fizz');
    });
  });

  describe('5の倍数の時Buzzに変換する', () => {
    it('5を渡すとBuzzを返す', () => {
      expect(fizzBuzz.convert(5)).toBe('Buzz');
    });
  });

  describe('3と5の公倍数の時FizzBuzzに変換する', () => {
    it('15を渡すとFizzBuzzを返す', () => {
      expect(fizzBuzz.convert(15)).toBe('FizzBuzz');
    });
  });

  describe('その他の数値はそのまま文字列に変換する', () => {
    it('1を渡すと文字列の1を返す', () => {
      expect(fizzBuzz.convert(1)).toBe('1');
    });
  });

  describe('境界値外の入力であっても、同様の変換規則で動作する', () => {
    it('0を渡すとFizzBuzzを返す', () => {
      expect(fizzBuzz.convert(0)).toBe('FizzBuzz');
    });

    it('101を渡すと文字列101を返す', () => {
      expect(fizzBuzz.convert(101)).toBe('101');
    });
  });
});
