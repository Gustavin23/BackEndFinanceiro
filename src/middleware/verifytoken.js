const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");

// função para validar o token
const verify_token = (req,res,next)=>{

    const token = req.headers.token;

    if(!token)return res.status(401).send({output:`Access denied`});
    jwt.verify(token,cfg.jwt_secret,(error,same)=>{
        if(error)return res.status(401).send({output:`Error verifying token -> ${error}`});
        if(!same)return res.status(401).send({output:`Authentication error -> ${error}`});
        next();
    });
}
module.exports = verify_token;