const { MongoClient } = require("mongodb");


const uri =
  "mongodb+srv://support:YrMnGENAHdvGcfAo@supportservicev2.3md7h.mongodb.net/support-service?retryWrites=true&w=majority";

const client = new MongoClient(uri);


const connectSource = async () => {
    await client.connect();
    return client;
}

module.exports = connectSource;

