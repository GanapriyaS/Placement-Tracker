const viewstaffprofile = (req, res) => {
    res.json("getstaffprofile");
}

const editstaffprofile =  (req, res) => {
    if(true) {
        res.json("editstaffprofile");
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
}


const deletestudent = (req, res) => {

    if(true) {
        res.json({ message: 'Consumer product removed' });
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
}

const addstudent =(req, res) => {
    res.status(201).json("addStudent")
}

const viewstudents =(req, res) => {
    res.status(201).json("addStudent")
}

const editstudent = (req, res) => {
    // const { prod_name, price, image, seller_name, prod_size, quantity, avalaible_location } = req.body
    if (true) {
        res.status(201).json("editstudent")
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
}

module.exports = {
    addstudent,
    editstudent,
    deletestudent,
    editstaffprofile,
    viewstaffprofile,
    viewstudents
}