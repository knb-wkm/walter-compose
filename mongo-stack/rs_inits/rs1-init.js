var conf = {
  _id: "rs1",
  configsvr: true,
  members: [
    { _id: 0, host: "mongocfg1_1:27017" },
    { _id: 1, host: "mongocfg1_2:27017" },
    { _id: 2, host: "mongocfg1_3:27017" }
  ]
};

rs.initiate(conf);
