var middleware = {
    requireAuthentication:function(req, res, next){
        console.log('Private network entered'+req); 
        next();
    },
    
    logger:function(req,res,next){
        console.log('Logging the request for route:'+ req.originalUrl +', Method:'+req.method);
        next();
    }
};


module.exports = middleware;