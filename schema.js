const joi =require('joi');


const schema={
          register:joi.object({

                    name:joi.string().required(),
                    email:joi.string().email().required(),
                    password:joi.string().min(6).max(12).required()}),

                    login:joi.object({

                        email:joi.string().email().required(),
                        password: joi.string().max(10).min(6)
                        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))})
    }

module.exports=schema
