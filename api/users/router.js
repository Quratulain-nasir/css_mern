const app = require('express')
const router = app.Router()

const { SignUp,Login, allUsers, getUserbyEmail,userbyid,updateuser, deleteuser } = require('./controller')


router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/userbyid/:_id', userbyid) 
router.put('/updateuser/:_id', updateuser) 
router.delete('/deleteuser/:_id', deleteuser) 



module.exports = router