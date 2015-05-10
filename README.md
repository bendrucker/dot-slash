# dot-slash [![Build Status](https://travis-ci.org/bendrucker/dot-slash.svg?branch=master)](https://travis-ci.org/bendrucker/dot-slash)
Normalize and detect the "./" relative path prefix

## Installing

```sh
npm install dot-slash
```

## API

##### `ds.has(path)` -> `Boolean`

Checks whether the supplied relative `path` begins with `'./'`

```js
ds.has('./foo') // => true
```

##### `ds.enforce(path, prefix)` -> `String`

Ensures that the path is or is not prefixed with `'./'`, depending on `prefix`. If only one argument is passed, `prefix` is set to `true`.

```js
ds.enforce('foo', true) // => './foo'
```

##### `ds.normalize(source, destination)` -> `String`

Normalizes the `source` relative path to the same `'./'` usage as the `destination` path. 

```js
ds.normalize('foo', './bar') // => './foo'
```
