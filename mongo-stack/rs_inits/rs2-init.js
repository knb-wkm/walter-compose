var conf = {
  _id: "rs2",
  members: [
    { _id: 0, host: "mongosrd2_1:27017" },
    { _id: 1, host: "mongosrd2_2:27017" },
    { _id: 2, host: "mongosrd2_3:27017" },
  ]
};

rs.initiate(conf);
