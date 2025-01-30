#! /bin/bash

npm run build

rm -rf ../css/ ../js/ ../favicon.ico ../index.html
mv ./dist/* ..