import { describe, expect, test } from 'vitest';
import { ClosedRange } from './ClosedRange';

describe('閉区間を表現する ClosedRange クラス', () => {
  describe('下端点・上端点を持つ', () => {
    test('[1,2] のインスタンスで、文字列 [1,2] を出力する', () => {
      const r = new ClosedRange(1, 2);
      expect(r.toString()).toBe('[1,2]');
    });
  });

  describe('下端点は常に上端点以下である', () => {
    test('下端点 1 に対して境界値である 1 を渡すと例外を投げない', () => {
      const initInvalidRange = () => new ClosedRange(1, 1);
      expect(initInvalidRange).not.toThrowError();
    });

    test('下端点 1 に対して境界値外である 0 を渡すと例外を投げる', () => {
      const initInvalidRange = () => new ClosedRange(2, 1);
      expect(initInvalidRange).toThrowError();
    });
  });

  describe('任意の整数が閉区間に含まれるか判定できる', () => {
    test('[-2,2] の ClosedRange で includes に -3 を渡すと false を返す', () => {
      const r = new ClosedRange(-2, 2);
      expect(r.includes(-3)).toBe(false);
    });

    test.each<number>([-2, -1, 0, 1, 2])(
      '[-2,2] の ClosedRange で includes に %d を渡すと true を返す',
      (n) => {
        const r = new ClosedRange(-2, 2);
        expect(r.includes(n)).toBe(true);
      },
    );

    test('[-2,2] の ClosedRange で includes に 3 を渡すと false を返す', () => {
      const r = new ClosedRange(-2, 2);
      expect(r.includes(3)).toBe(false);
    });
  });

  describe('別の閉区間と一致することを isEaualTo で判定できる', () => {
    test('[1,3] の ClosedRange で [1,3] を渡すと true を返す', () => {
      const r = new ClosedRange(1, 3);
      const another = new ClosedRange(1, 3);
      expect(r.isEqualTo(another)).toBe(true);
    });

    test('[1,3] の ClosedRange で [1,4] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 3);
      const another = new ClosedRange(1, 4);
      expect(r.isEqualTo(another)).toBe(false);
    });

    test('[1,3] の ClosedRange で [0,3] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 3);
      const another = new ClosedRange(0, 3);
      expect(r.isEqualTo(another)).toBe(false);
    });
  });

  describe('別の閉区間を包含することを contains で判定できる', () => {
    describe.each<number>([1, 2, 3])('[1,5] の ClosedRange に 下端 %d で', (n) => {
      test.each<number>([3, 4, 5])('上端 %d の ClosedRange を渡すと true を返す', (m) => {
        const r = new ClosedRange(1, 5);
        const another = new ClosedRange(n, m);
        expect(r.contains(another)).toBe(true);
      });
    });

    test('[1,5] の ClosedRange に両端が範囲外の [0,6] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 5);
      const another = new ClosedRange(0, 6);
      expect(r.contains(another)).toBe(false);
    });

    test('[1,5] の ClosedRange に下端だけが範囲外の [0,5] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 5);
      const another = new ClosedRange(0, 5);
      expect(r.contains(another)).toBe(false);
    });

    test('[1,1] の ClosedRange に上端が範囲外の [1,6] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 5);
      const another = new ClosedRange(1, 6);
      expect(r.contains(another)).toBe(false);
    });
  });

  describe('上端または下端として整数以外を使用できない', () => {
    test('[1,1.5] を渡すと例外を投げる', () => {
      const initRangeWithFloat = () => new ClosedRange(1, 1.5);
      expect(initRangeWithFloat).toThrowError();
    });

    test('[1.5,2] を渡すと例外を投げる', () => {
      const initRangeWithFloat = () => new ClosedRange(1.5, 2);
      expect(initRangeWithFloat).toThrowError();
    });

    test('[1.5,1.5] を渡すと例外を投げる', () => {
      const initRangeWithFloat = () => new ClosedRange(1.5, 1.5);
      expect(initRangeWithFloat).toThrowError();
    });
  });
});
