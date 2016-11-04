/**
* @author Peter Goldsborough <peter@goldsborough.me>
* @author Jaime González García <vintharas@google.com>
* @license Apache
* Copyright 2016 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

module.exports = {
  concat: {
    src: 'src/**/*.js',
    output: 'angular-dfp.es6.js',
    dest: './bin'
  },
  transpile: {
    src: './bin/angular-dfp.es6.js',
    dest: './bin'
  },
  compile: {
    src: './bin/angular-dfp.es6.js',
    output: 'angular-dfp.min.js',
    dest: './bin'
  },
  docs: {
    src: ['README.md', './src/**/*.js']
  },
  demo: {
    src: './bin/angular-dfp*.js',
    dest: 'demo/static'
  },
  lint: {
    src: 'src/**'
  },
  clean: {
    files: ['bin', 'docs']
  }
};
