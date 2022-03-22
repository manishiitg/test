const { MongoClient } = require("mongodb");


const uri =
  "mongodb://manish:ACVVCH7t7rqd8kB8@cohortx.cluster-cbo3ijdmzhje.ap-south-1.docdb.amazonaws.com:27017/support-service?ssl=true&&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

  // mongo --ssl --host cohortx.cluster-cbo3ijdmzhje.ap-south-1.docdb.amazonaws.com:27017 --sslCAFile rds-combined-ca-bundle.pem --username manish --password ACVVCH7t7rqd8kB8

  
//const uri = 'mongodb://localhost:27017/support-service';

const client = new MongoClient(uri);


const connectTarget = async () => {
    await client.connect();
    return client;
}

module.exports = connectTarget;

