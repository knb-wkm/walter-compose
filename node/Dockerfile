FROM ubuntu:16.04

RUN set -x \
    && apt-get update \
    && apt-get install -y locales language-pack-ja libreoffice-l10n-ja libreoffice imagemagick ghostscript nkf curl fonts-ipa* fonts-takao* \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs build-essential git vim \
    && mkdir /webapp \
    && cd /webapp \
    && git clone https://github.com/knb-wkm/walter-02.git \
    && cd walter-02 \
    && git checkout develop \
    && cd server \
    && npm install \
    && cp lib/configs/server.js.dist lib/configs/server.js \
    && cd ../client \
    && npm install \
    && npm run build 

EXPOSE 3333

CMD ["node"]
    

