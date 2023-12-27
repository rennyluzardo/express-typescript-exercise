import express from 'express'
import * as diaryServices from '../services/diary'
import { toNewDiaryEntry, toDeleteDiaryEntry, toUpdateDiaryEntry } from '../libs/utils'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(+req.params.id)

  return (diaryEntry != null)
    ? res.send(diaryEntry)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    }
  }
})

router.put('/', (req, res) => {
  try {
    const updateDiaryEntry = toUpdateDiaryEntry(req.body)

    const updatedDiaryEntry = diaryServices.updateDiary(updateDiaryEntry)

    res.json(updatedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    }
  }
})

router.delete('/', (req, res) => {
  try {
    const deleteDiaryEntry = toDeleteDiaryEntry(req.body)

    const deletedDiaryEntry = diaryServices.deleteDiary(deleteDiaryEntry)

    res.json(deletedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    }
  }
})

export default router
