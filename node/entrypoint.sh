#!/bin/bash

cd /webapp/walter-02/server
./node_modules/.bin/forever start -c node_modules/.bin/babel-node lib/index.js

