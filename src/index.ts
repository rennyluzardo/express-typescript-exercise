import express from 'express' // ESModules
// const express = require('express') -> commonjs

import diaryRouter from './routes/diaries'
import userRouter from './routes/users'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone pinged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)
app.use('/api/v1/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
