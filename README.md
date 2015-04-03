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

##### `ds.normalize(source, destination)` -> `String`

Normalizes the `source` relative path to the same `'./'` usage as the `destination` path. 

```js
ds.normalize('foo', './bar') // => './foo'
```
