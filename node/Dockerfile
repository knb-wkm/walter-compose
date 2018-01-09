FROM node:6.12

RUN set -x \
      && mkdir /webapp \
      && cd /webapp \
      && git clone https://github.com/knb-wkm/walter-02.git \
      && cd walter-02 \
      && git checkout develop \
      && cd server \
      && npm install \
      && cd ../client \
      && npm install \
      && npm run build \
      && apt-get update \
      && apt-get install -y vim libreoffice-l10n-ja libreoffice imagemagick ghostscript


COPY entrypoint.sh /entrypoint.sh

EXPOSE 3333

CMD ["/bin/bash /entrypoint.sh"]
