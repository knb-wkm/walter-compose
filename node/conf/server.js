// mongoの接続先情報
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
    authUrl: "http://swift_01:8080/auth/v1.0",  // 社内docker
    version: 1
  },

  // 社内docker
  integration: {
    provider: "openstack",
    username: "test:tester",
    password: "testing",
    authUrl: "http://swift_01:8080/auth/v1.0",
    version: 1
  }
};

// パスワードhash用の秘密鍵
// @todo テナント毎に分ける？
export const SECURITY_CONF = {
  development: {
    secretKey: "secretKey"
  },
  migration: {
    secretKey: "secretKey"
  }
};
