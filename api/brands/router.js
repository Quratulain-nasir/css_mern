const app = require('express')
const router = app.Router()

const { AddBrand , brandByID , brandByName , getAllBrands , deletebrand , updateBrand} = require("./controller")

router.post('/add-brand', AddBrand)
router.get('/brandbyid/id',brandByID)
router.get('/brandbyname/BrandName',brandByName)
router.get('/getallbrands', getAllBrands)
router.delete('/deletebrand/_id', deletebrand)
router.put('/updatebrands/_id', updateBrand)

module.exports = router;