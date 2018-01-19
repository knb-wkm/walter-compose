#!/bin/bash

cd /webapp/walter-02
git pull origin develop

cd server
npm install
npm run build

cp lib/configs/server.js.dist lib/configs/server.js

cd ../client
npm install
npm run build




