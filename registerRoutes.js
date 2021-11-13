const route =require('express').Router()
const { ObjectId } = require('mongodb');

const bcrypt = require('bcrypt')

const mongo=require('./mongo')

mongo.connect()

const{register,login}=require('./schema')

route.get('/' , async (req,res,next)=>{res.send('post middleware is called!!!'),console.log('login called');

                                        const user= await mongo.db.collection('post').findOne(req.body.email);

                                        const isValid = await bcrypt.compare(req.body.password,user.password)

                                        user ?  ( (isValid) ? (res.send(user),console.log(user,'login successful') )
                                        : res.send('Username or password is incorrect')) 
                                        :  (console.log ('Username or password is incorrect'))
                        
                                        })


route.post('/',async (req,res)=>{
                                 let{error,value}=register.validate(req.body)

                                 if (error)
                                   return res.status(400).send({
                                       error:'Validation Failed',
                                       message:error.details[0].message,
                                   })
    
                                const found = await   mongo.db.collection('user').findOne({email:value.email})
                                
                              {if (!found)

                             {   const salt = await bcrypt.genSalt(5)
                                value.password= await bcrypt.hash(value.password,salt)
                                const newUser =  await mongo.db.collection('user').insertOne({...value,Income:'',Expanditure:''})
                                                               
                                                               console.log(newUser,'user registered successfully');
                                                               res.send(newUser)}
                                else res.sendStatus(401).send('user alraedy exist')
                                    console.log('user alraedy exist'),found }})
 

module.exports = route