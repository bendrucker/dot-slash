'use strict';

var test = require('tape');
var ds = require('../');

test('has', function (t) {

  t.ok(ds.has('./foo'));
  t.notOk(ds.has('foo'));
  t.notOk(ds.has('../foo'));
  t.end();

});

test('normalize', function (t) {

  t.equal(ds.normalize('foo', 'bar'),'foo', 'noop');
  t.equal(ds.normalize('./foo', './bar'),'./foo', 'noop ./');
  t.equal(ds.normalize('foo', './bar'),'./foo', 'add ./');
  t.equal(ds.normalize('./foo', 'bar'),'foo', 'remove ./');
  t.end();

});

