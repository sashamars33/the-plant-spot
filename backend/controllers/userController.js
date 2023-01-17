



const registerUser = (req,res) => {
    const {name, email, password} = req.body
    
    //Validation 
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields.')
    }
}

const loginUser = (req,res) => {
    console.log('login')
}

module.exports = {
    registerUser,
    loginUser
}