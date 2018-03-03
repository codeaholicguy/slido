## KoaJS Starter Kit — <a href="https://github.com/codeaholicguy/koajs-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/codeaholicguy/koajs-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a>

Simple starter kit for using KoaJS to build a web application written in ES7.

## Getting Started

Just clone and explore it!

## Sample

```js
@controller('/sample')
export default class SampleController extends BaseController {
  @get('/hello/:name')
  async sayHello(ctx, next) {
    ctx.body = `Hello ${ctx.params.name}`
  }

  @get('/goodbye')
  async goodbye(ctx, next) {
    ctx.status = HttpStatusCodes.OK
  }
}
```

## Commands

```
yarn start
```

Start your web application at `localhost:3000`. You can also specify the port by `PORT=8080 yarn start`.

```
yarn test
```

If you want to run the test suite. I use Jest for testing.

## License

MIT


