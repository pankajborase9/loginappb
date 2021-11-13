const express =  require ('express');

const mongo = require ('./Mongo')
 

const {config}= require('dotenv') 

const userRoutes = require('./userRoutes')

const registerRoutes = require('./registerRoutes')

const app = express();

config()


const cors = require('cors');

const jwt = require('jsonwebtoken');

//app.use('/login',userRoutes);


(async ()=>{
    try {
        await mongo.connect()

       
    
        //Parse request body in json format
        app.use(express.json())

        //app.use(express.urlencoded())
        app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
        
        //comman middleware
        app.use((req,res,next)=>{ console.log('comman middleware is called');
                                    next();});
        
                                       /*  app.get('/login' , async (req,res,next)=>{console.log('post middleware is called!!!');
                                        const user= await mongo.db.collection('post').findOne(req.body.name);
                                        user ?  ( (user.password== req.body.password) ? console.log(user) 
                                        : (console.log ('Username or password is incorrect'))) 
                                        :  (console.log ('Username or password is incorrect'))
                                        res.send(user);
                                        }) */
    
    app.use('/login',userRoutes);
    app.use('/register',registerRoutes)

    app.listen(process.env.port,()=>console.log(`server runnning at port ${process.env.port}`));
        
    } catch (error) {console.log('error connect')}
      } )();
