const viewstudentprofile = (req, res) => {
            res.status(201).json("viewstudentprofile")
        }

const viewallstudents = (req, res) => {
    res.status(201).json("viewstudentprofile")
}

const editstudentprofile = (req, res) => {
    res.json("editstudentprofile")
}

const viewappliedjobs = (req, res) => {
    res.json("viewappliedjobs")
}



module.exports = {
    viewappliedjobs,
    editstudentprofile,
    viewstudentprofile,
    viewallstudents
}