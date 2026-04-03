const auth = (req, res, next) =>{
    if(req.session.username) {
        req.status(401).json({message: "Unauthorized"});
    } else {
        next();
    }
}
module.exports = auth;
