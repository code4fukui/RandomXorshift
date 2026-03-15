# RandomXorshift

Xorshiftアルゴリズムに基づいた乱数生成器ライブラリです。0から1の間の乱数を生成することができます。

## デモ

例のように使用できます:

```js
import { RandomXorshift } from "https://code4fukui.github.io/RandomXorshift/RandomXorshift.js";

for (let j = 0; j < 2; j++) {
  const random = new RandomXorshift(2463534242);
  for (let i = 0; i < 10; i++) {
    console.log(random.next()); // 0から1の間の乱数
  }
  console.log();
}
```

## 機能

- 0から1の間の乱数を生成
- シードを指定できる

## 使い方

インポートして`RandomXorshift`クラスをインスタンス化し、`next()`メソッドを呼び出すことで乱数を取得できます。初期シードは`2463534242`ですが、`setSeed()`メソッドで変更可能です。

## ライセンス

MITライセンスです。