const connectSource = require('./connectSource');
const connectTarget = require('./connectTarget');

const run = async () => {
    const clientSource = await connectSource();
    const clientTarget = await connectTarget();

    const sourceDb = clientSource.db('support-service');
    const targetDb = clientTarget.db('support-service2');

    const stcSource = sourceDb.collection('support_ticket_conversations');
    const stcTarget = targetDb.collection('support_ticket_conversations');

    const cursor = stcSource.find({});

    let docs = [];

    console.log('Docs to insert:', await stcSource.estimatedDocumentCount());
    let tstart = Date.now();

    while (await cursor.hasNext()) {
        const val = await cursor.next();
        docs.push(val);

        if (docs.length > 100) {
            console.log(`Inserting ${docs.length} docs`);
            await stcTarget.insertMany(docs);
            const count = await stcTarget.countDocuments();
            console.log(`Took: ${Date.now() - tstart}ms since last run. Target length: `, count);
            docs = [];
            tstart = Date.now();
        }
    }
};


run();

