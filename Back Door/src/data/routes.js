const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.get(('/'), controller.getData)
router.get(('/convert'), controller.convert)
router.get(('/getProvince/'), controller.getProvince)
router.get(('/getProvinceName/:gid'), controller.getProvinceName)
router.get(('/getImage'), controller.getImage)
router.get(('/getID/:gid'), controller.getDatabyGID)


// router.get(('/'), (req, res) => {
//   res.send('Route API')
// })

module.exports = router