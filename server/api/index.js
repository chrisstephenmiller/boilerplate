const router = require('express').Router()
const { User } = require('../db/models')

router.post('/', async ({ body: { name } }, res, next) => {
  try {
    const user = await User.findOrCreate({ where: { name } })
    res.send(user)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
