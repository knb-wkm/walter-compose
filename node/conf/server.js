export const SERVER_CONF = {
  development: {
    url: "mongodb://mongos_1",
    db_host: "mongos_1",
    db_name: "walter",
    port: 3333
  },
  integration: {
    url: "mongodb://mongos_1",
    db_host: "mongos_1",
    db_name: "walter",
    port: 3333
  },
  production: {
    url: "mongodb://mongos_1",
    db_host: "mongos_1",
    db_name: "walter",
    port: 3333
  }
};

export const STORAGE_CONF = {
  // virtualbox
  development: {
    provider: "openstack",
    username: "test:tester",
    password: "testing",
    authUrl: "http://swift_01:8080/auth/v1.0",
    version: 1
  },

  integration: {
    provider: "openstack",
    username: "test:tester",
    password: "testing",
    authUrl: "http://swift_01:8080/auth/v1.0",
    version: 1
  }
};

export const SECURITY_CONF = {
  development: {
    secretKey: "secretKey"
  },
  migration: {
    secretKey: "secretKey"
  }
};

export const ELASTICSEARCH_CONF = {
  development: {
    host: "elastic_01",
    port: "9200",
    logLevel: "error"
  },
  integration: {
    host: "elastic_01",
    port: "9200",
    logLevel: "error"
  },
  production: {
    host: "elastic_01",
    port: "9200",
    logLevel: "error"
  }
};