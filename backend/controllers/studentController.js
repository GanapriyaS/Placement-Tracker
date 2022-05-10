const viewstudentprofile = async (req,res) => {
            res.status(201).json("viewstudentprofile")
        }

const viewallstudents = async (req,res) => {
    res.status(201).json("viewstudentprofile")
}

const editstudentprofile = async (req,res) => {
    res.json("editstudentprofile")
}

const viewappliedjobs = async (req,res) => {
    res.json("viewappliedjobs")
}



module.exports = {
    viewappliedjobs,
    editstudentprofile,
    viewstudentprofile,
    viewallstudents
}