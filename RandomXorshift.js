export class RandomXorshift {
  constructor(seed = 2463534242) {
    this.x = seed;
  }
  setSeed(seed) {
    this.x = seed;
  }
  next() {
    this.x ^= this.x << 13;
    this.x ^= this.x >>> 17;
    this.x ^= this.x << 5;
    return (this.x >>> 0) / 4294967296;
  }
}
/*
const random = new RandomXorshift(2463534242);
console.log(random.next()); // 0から1の間の乱数
*/
