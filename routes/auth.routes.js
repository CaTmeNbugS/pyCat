const {Router} = require('express')
const router = Router()


router.post('/register', async (req, res) =>{
    try{
        const {email, password, city} = req.body   
    } catch(e){
        res.status(500).json({message:"Курочки инет всосали"})
    }
})
router.post('/login', async (req, res) =>{
    
})

module.exports = router