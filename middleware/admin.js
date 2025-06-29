const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = "asdsdf"; // This should be stored securely in an environment variable

function adminMiddleware(req,res,next){
const token =req.headers.token;
const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
if(decoded){
    req.userId = decoded.id;
    next();
}
else {
    res.status(401).json({
        message: "Unauthorized"
    });

}}
module.exports = {
    adminMiddleware: adminMiddleware
}