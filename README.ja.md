# RandomXorshift

シンプルなXorshift乱数生成ライブラリ。

## 特徴
- Xorshiftによる乱数生成
- シード値のカスタマイズが可能

## 使い方
RandomXorshiftライブラリを使用するには、インポートを行い、任意のシード値（省略可能）を指定して新しいインスタンスを作成します:

```js
import { RandomXorshift } from "https://code4fukui.github.io/RandomXorshift/RandomXorshift.js";

const random = new RandomXorshift(2463534242);
console.log(random.next()); // 0から1の間の乱数を出力
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
