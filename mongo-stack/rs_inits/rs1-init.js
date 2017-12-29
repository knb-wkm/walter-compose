var conf = {
  _id: "rs1",
  configsvr: true,
  members: [
    { _id: 0, host: "mongocfg_rs1_1:27017" },
    { _id: 1, host: "mongocfg_rs1_2:27017" },
    { _id: 2, host: "mongocfg_rs1_3:27017" }
  ]
};

rs.initiate(conf);
