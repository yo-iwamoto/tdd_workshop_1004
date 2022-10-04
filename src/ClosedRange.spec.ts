import { describe, expect, test } from 'vitest';
import { ClosedRange } from './ClosedRange';

describe('閉区間を表現する ClosedRange クラスの実装', () => {
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

    test('下端点 1 に対して境界値外である 0 を渡すと例外を投げない', () => {
      const initInvalidRange = () => new ClosedRange(2, 1);
      expect(initInvalidRange).toThrowError();
    });
  });

  describe('任意の整数が閉区間に含まれるか判定できる', () => {
    test('[1,1] のインスタンスで includes に 1 を渡すと true を返す', () => {
      const r = new ClosedRange(1, 1);
      expect(r.includes(1)).toBe(true);
    });

    test('[1,1] のインスタンスで 0 を渡すと false を返す', () => {
      const r = new ClosedRange(1, 1);
      expect(r.includes(0)).toBe(false);
    });
  });

  describe('別の閉区間との関係を判定できる', () => {
    test('[1,1] のインスタンスで isEqualTo に [1,1] を渡すと true を返す', () => {
      const r = new ClosedRange(1, 1);
      const another = new ClosedRange(1, 1);
      expect(r.isEqualTo(another)).toBe(true);
    });

    test('[1,1] のインスタンスで isEqualTo に [1,2] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 1);
      const another = new ClosedRange(1, 2);
      expect(r.isEqualTo(another)).toBe(false);
    });

    test('[1,1] のインスタンスで contains に [1,1] を渡すと true を返す', () => {
      const r = new ClosedRange(1, 5);
      const another = new ClosedRange(2, 4);
      expect(r.contains(another)).toBe(true);
    });

    test('[1,1] のインスタンスで contains に [1,2] を渡すと false を返す', () => {
      const r = new ClosedRange(1, 5);
      const another = new ClosedRange(0, 6);
      expect(r.contains(another)).toBe(false);
    });
  });
});
