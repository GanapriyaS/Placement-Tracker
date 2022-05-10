const viewcompanies = async (req,res) => {
    res.json("getSeedProducts");
}

const disapprovecompany = async (req,res) => {

    if (true) {
        res.json({ message: "Product removed" });
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
}

const approvecompany = async (req,res) => {
    res.status(201).json("approvecompany")
}

const deletestaff = async (req,res) => {

    if(true) {
        res.json({ message: 'Consumer product removed' });
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
}

const addstaff =async (req,res) => {
    res.status(201).json("addstaff")
}

const editstaff = async (req,res) => {
    // const { prod_name, price, image, seller_name, prod_size, quantity, avalaible_location } = req.body
    if (true) {
        res.status(201).json("editstaff")
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
}

const viewstaffs =async (req,res) => {
    res.status(201).json("addStudent")
}

module.exports = {
    viewstaffs,
    addstaff,
    deletestaff,
    editstaff,
    approvecompany,
    disapprovecompany,
    viewcompanies,
}