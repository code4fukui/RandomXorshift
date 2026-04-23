# RandomXorshift

Xorshiftアルゴリズムに基づいた乱数生成器ライブラリです。0から1の間の乱数を生成することができます。

## 機能

- Xorshiftによる乱数生成
- カスタマイズ可能なシード値

## 使い方

RandomXorshift ライブラリを使用するには、インポートして新しいインスタンスを作成します。オプションでシード値を指定することもできます。

```js
import { RandomXorshift } from "https://code4fukui.github.io/RandomXorshift/RandomXorshift.js";

const random = new RandomXorshift(2463534242);
console.log(random.next()); // 0から1の間の乱数を出力
```

## ライセンス

MITライセンスです。詳細は[LICENSE](LICENSE)をご覧ください。