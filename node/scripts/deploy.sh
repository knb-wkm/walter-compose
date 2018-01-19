#!/bin/bash

cd /webapp/walter-02
git pull origin develop

cd server
npm install
npm run build

cd ../client
npm install
npm run build




