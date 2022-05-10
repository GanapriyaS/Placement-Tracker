const login = async (req,res) => {
    

    // if (true && (await user.matchPassword(password))) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         cropSelection: user.cropSelection,
    //         token: generateToken(user._id)
    //     })
    // } else {
    //     res.status(401)
    //     throw new Error('Invalid email or password')
    // }
    res.send("login")
}

// const registerUser = asyncHandler(async async (req,res) => {
//     const { name, email, password, cropSelection } = req.body

//     const userExists = await User.findOne({ email })

//     if (userExists) {
//         res.status(400)
//         throw new Error('User already exists')
//     }

//     const user = await User.create({
//         name,
//         email,
//         password,
//         cropSelection
//     })

//     if (user) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             cropSelection: user.cropSelection,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id)
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid user data')
//     }
// })


const companyregister = async (req,res) => {

    // if (user) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         cropSelection: user.cropSelection,
    //         isAdmin: user.isAdmin,
    //     })
    // } else {
    //     res.status(401)
    //     throw new Error('User not found!!')
    // }
    res.send("companyregister")
}


// const updateUserProfile = asyncHandler(async async (req,res) => {
//     const user = await User.findById(req.user._id)

//     if (user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         user.cropSelection = req.body.cropSelection || user.cropSelection
//         if (req.body.password) {
//             user.password = req.body.password
//         }

//         const updatedUser = await user.save()

//         res.json({
//             _id: updatedUser._id,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//             cropSelection: updatedUser.cropSelection,
//             token: generateToken(updatedUser._id)
//         })
//     } else {
//         res.status(401)
//         throw new Error('User not found!!')
//     }
// })


// const deleteUser = async (req,res) => {
//     const user = await User.findById(req.params.id)

//     if (user) {
//         await user.remove()
//         res.json({ message: 'User Removed' })
//     } else {
//         res.status(401)
//         throw new Error('User not found!!')
//     }
// }

module.exports = {
    login,
    companyregister
}