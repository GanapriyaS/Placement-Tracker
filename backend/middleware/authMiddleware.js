// import jwt from 'jsonwebtoken'

const staff =(req, res, next) => {
    // let token

    // if (
    //     req.headers.authorization &&
    //     req.headers.authorization.startsWith('Bearer')
    // ) {
    //     try {
    //         token = req.headers.authorization.split(' ')[1]

    //         const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //         req.user = await User.findById(decoded.id).select('-password')

    //         next()
    //     } catch (error) {
    //         res.status(401)
    //         throw new Error('Not authorized, token failed')
    //     }
    // }

    // if (!token) {
    //     res.status(401)
    //     throw new Error('Not authorized, no token')
    // }
    next()
}

const company =(req, res, next) => {
    next()
}

const student =(req, res, next) => {
    next()
}

const admin = (req, res, next) => {
    // app.use(express.urlencoded({ extended: false }))s
    if(false) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}


module.exports = { admin,
    staff } 