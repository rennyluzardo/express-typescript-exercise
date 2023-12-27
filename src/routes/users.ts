import express from 'express'
import * as userServices from '../services/user'
import { toNewUserEntry } from '../libs/utils'

const router = express.Router()

router.get('/', (_, res) => {
  const users = userServices.allUsers()

  res.send(users)
})

router.post('/', (req, res) => {
  const newUserEntry = toNewUserEntry(req.body)
  const addedUserEntry = userServices.addUser(newUserEntry)

  res.send(addedUserEntry)
})

export default router
