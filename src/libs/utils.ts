import { DeleteDiaryEntry, DiaryEntry, NewDiaryEntry, NewUserEntry } from '../types'
import { Visibility, Weather } from '../enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    userId: parseId(object.userId)
  }

  return newEntry
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }

  return weatherFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

export const toDeleteDiaryEntry = (object: any): DeleteDiaryEntry => {
  const deleteEntry: DeleteDiaryEntry = {
    id: parseId(object.id)
  }

  return deleteEntry
}

const parseId = (idFromRequest: any): number => {
  if (!isNumber(idFromRequest)) {
    throw new Error('Incorrect or missing id')
  }

  return idFromRequest
}

const isNumber = (id: number): boolean => {
  return Boolean(typeof id === 'number')
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name.')
  }

  return nameFromRequest
}

const parseLastname = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing lastname.')
  }

  return nameFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
  // TODO: validate if string contain @ and dot.
  if (!isString(emailFromRequest)) {
    throw new Error('Incorrect or missing email.')
  }

  return emailFromRequest
}

const parsePassword = (passwordFromRequest: any): string => {
  // TODO: validate if password contain max 8 characters
  if (!isString(passwordFromRequest)) {
    throw new Error('Incorrect or missing password.')
  }

  return passwordFromRequest
}

const parseDiaryId = (diaryIdFromRequest: any): number => {
  if (!isNumber(diaryIdFromRequest)) {
    throw new Error('Incorrect or missing diaryId')
  }

  return diaryIdFromRequest
}

export const toUpdateDiaryEntry = (object: any): DiaryEntry => {
  const updateEntry: DiaryEntry = {
    id: parseId(object.id),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment),
    userId: parseId(object.userId)
  }

  return updateEntry
}

export const toNewUserEntry = (object: any): NewUserEntry => {
  const userEntry: NewUserEntry = {
    name: parseName(object.name),
    lastname: parseLastname(object.lastname),
    email: parseEmail(object.email),
    password: parsePassword(object.password),
    diaryId: parseDiaryId(object.diaryId)
  }

  return userEntry
}
