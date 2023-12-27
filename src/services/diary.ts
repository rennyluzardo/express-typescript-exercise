import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry, DeleteDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined // Se puede devolver entry pero undefined es mas explicito.
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility, userId }) => {
    return {
      id,
      date,
      weather,
      visibility,
      userId
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}

export const deleteDiary = (deleteDiaryEntry: DeleteDiaryEntry): NonSensitiveInfoDiaryEntry | undefined => {
  if (diaries !== null) {
    const entry = diaries.find(d => d.id === deleteDiaryEntry.id)

    if (entry !== undefined) {
      diaries.splice(entry?.id - 1, 1)
    }

    return entry
  }

  return undefined
}

export const updateDiary = (updateDiaryEntry: DiaryEntry): NonSensitiveInfoDiaryEntry | undefined => {
  if (diaries !== null) {
    const entry = diaries.find(d => d.id === updateDiaryEntry.id)

    if (entry !== undefined) {
      diaries.map((diary, _i, _diaries) => {
        if (diary.id === entry.id) {
          _diaries[_i] = updateDiaryEntry
          return _diaries
        }
        return _diaries
      })

      return entry
    }
  }

  return undefined
}
