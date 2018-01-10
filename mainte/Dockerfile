FROM ubuntu:16.04

RUN set -x \
      && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927 \
      && echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" > /etc/apt/sources.list.d/mongodb-org-3.2.list \
      && apt-get update \
      && apt-get install -y vim emacs-nox mongodb-org-shell ruby nodejs npm \
      && update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10 \
      && gem install faraday

