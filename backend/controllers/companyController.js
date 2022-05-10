const viewjobs = (req, res) => {
    res.json("viewjobs");
}

const viewalljobs = (req, res) => {
    res.json("viewjobs");
}

const viewapplicants = (req, res) => {
    res.json("applicants");
}

const viewcompanprofile = (req, res) => {

    if (true) {
        res.json("companydetails");
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
}


const editcompanyprofile = (req, res) => {
    // const productLendMachine = await ProductLendMachines.findById(req.params.id);

    if(true) {
        res.json("companyprofile");
    } else {
        res.status(404)
        throw new Error('Machine not Found')
    }
}

const deletejob = (req, res) => {
    // const lendMachine = await ProductLendMachines.findById(req.params.id);

    if(true) {
        res.json({ message: 'Machine Removed' });
    } else {
        res.status(404)
        throw new Error('Machine not Found')
    }
}

const deleteapplicant = (req, res) => {
    // const lendMachine = await ProductLendMachines.findById(req.params.id);

    if(true) {
        res.json({ message: ' Removed' });
    } else {
        res.status(404)
        throw new Error('Machine not Found')
    }
}

const addjob =  (req, res) => {
    // const lendMachine = new ProductLendMachines({
    //     name: 'sample machine',
    //     user: req.user._id,
    //     image: '/images/farmMachine.jpg',
    //     description: 'sample description',
    //     target_plant: 'sample category',
    //     price: 0,
    //     quantity: 0,
    //     machine_power: '0HP',
    // })

    res.status(201).json("addjob")
}

const editjob =  (req, res) => {
    // const { name, price, image, description, target_plant, quantity, machine_power } = req.body

    // const updateLendMachine = await ProductLendMachines.findById(req.params.id)

    if (true) {

        // updateLendMachine.name = name
        // updateLendMachine.price = price
        // updateLendMachine.image = image
        // updateLendMachine.description = description
        // updateLendMachine.target_plant = target_plant
        // updateLendMachine.quantity = quantity
        // updateLendMachine.machine_power = machine_power

        // const updatedMachine = await updateLendMachine.save()
        res.status(201).json("editjob")
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
}

const viewjobdetails = (req, res) => {
    res.json("viewjobdetails")
}

const hireapplicant = (req, res) => {
    res.json("viewjobdetails")
}

module.exports = { 
    viewapplicants,
    viewjobs,
    viewcompanprofile,
    viewalljobs,
    editcompanyprofile,
    editjob,
    deleteapplicant,
    deletejob,
    addjob,
    viewjobdetails,
    hireapplicant
}