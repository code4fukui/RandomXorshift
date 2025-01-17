# RandomXorshift
 
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

## reference

- [Xorshift - Wikipedia](https://en.wikipedia.org/wiki/Xorshift)
- [code4fukui/RandomMT](https://github.com/code4fukui/RandomMT/)
