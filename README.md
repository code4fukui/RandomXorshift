# RandomXorshift

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Xorshift random number generator library.

## Demo
The example usage is provided in the `RandomXorshift.example.js` file.

## Features
- Xorshift random number generation
- Customizable seed value

## Usage
To use the RandomXorshift library, import it and create a new instance with an optional seed value:

```js
import { RandomXorshift } from "https://code4fukui.github.io/RandomXorshift/RandomXorshift.js";

const random = new RandomXorshift(2463534242);
console.log(random.next()); // Outputs a random number between 0 and 1
```

## License
This project is licensed under the MIT License.