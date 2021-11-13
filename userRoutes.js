const route =require('express').Router()
const { ObjectId } = require('mongodb');

const mongo=require('./mongo')

const jwt = require('jsonwebtoken');

//mongo.connect()

route.get('/' , async (req,res,next)=>{res.send('post middleware is called!!!'),console.log('login called');
                                        /* const user= await mongo.db.collection('post').findOne(req.body.name);
                                        user ?  ( (user.password== req.body.password) ? res.send(user) 
                                        : res.send('Username or password is incorrect')) 
                                        :  (console.log ('Username or password is incorrect'))
                                        res.send(user); */
                                        })

route.post('/',async (req,res,)=>{console.log('post 2 middleware is called!!!');
                      const user= await mongo.db.collection('user').insertOne(req.body);
                            res.send(user)})


module.exports = route