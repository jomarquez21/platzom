#!/usr/bin/env node

try {
  require('./dist/src')()
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err
  }
  //require('babel/register')
  //require('./src')()
  console.log('aqui mensaje');
}
