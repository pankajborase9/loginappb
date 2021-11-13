const {MongoClient} = require('mongodb');

const URI='mongodb://localhost:27017';

const Client = new MongoClient(URI) ;     


module.exports={
         db:null,

         async connect(){

            // connect to mongo
            await Client.connect();

           // select the db
             this.db = Client.db('Moneymanager');
             console.log('connected to database')
         },



}