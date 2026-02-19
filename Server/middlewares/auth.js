import jwt from 'jsonwebtoken'




const userAuth = async (req, res, next) => {
    console.log("auth middleware called");
    console.log(req.headers);
    const authHeader = req.headers['authorization'];
    console.log("auth header" , authHeader);
    let token;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({success: false, message: 'Not Authorized. Please login again.'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(tokenDecode);
        console.log("token", token );
        console.log("token decode me id" , tokenDecode.id );
        console.log(tokenDecode.id, req.body);

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id };
        } else {
            return res.status(401).json({success: false, message: 'Not Authorized. Please login again.'});
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({success: false, message: 'Not Authorized. Please login again.'});
    }
};

export default userAuth;