const app = require('express')
const router = app.Router()
const { Productbybrand, ProductbyId, ProductbyName, getAllProducts, postProducts ,Productbycategory ,updateproduct , deleteproduct  } = require('./controller')

router.get('/productsbybrand/:brand', Productbybrand)
router.get('/getAllProducts', getAllProducts)
router.get('/Productbycategory/:category', Productbycategory)
router.post('/products', postProducts)
router.put('/updateproduct/:_id', updateproduct)
router.get('/productbyId/:id', ProductbyId)
router.get('/productbyname/:title', ProductbyName)
router.delete('/deleteproduct/:_id', deleteproduct)


module.exports = router