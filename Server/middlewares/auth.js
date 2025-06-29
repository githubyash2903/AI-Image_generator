import jwt from 'jsonwebtoken'




const userAuth = async (req, res, next) => {
console.log("auth middleware called");
    const {token} = req.headers;

    if (!token) {
        return res.json({success: false, message: 'Not Authorized. Please login again.'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
         console.log(tokenDecode);
         console.log("token",token);
         console.log(tokenDecode.id ,req.body);
        
        if(tokenDecode.id) {
             req.body.userId = tokenDecode.id;
        }
        else {
            return res.json({success: false, message: 'Not Authorized. Please login again.'});
        }
        
        next();

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
};

export default userAuth;