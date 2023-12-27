// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
import { Weather, Visibility } from './enums'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
  userId: number

  // send: (text: string) => void
}

// export class Diary implements DiaryEntry {
//   id: number
//   date: string
//   weather: Weather
//   visibility: Visibility
//   comment: string
//   userId: number

//   constructor () {
//     this.id = 1
//     this.date = ''
//     this.weather = Weather.Cloudy
//     this.visibility = Visibility.Good
//     this.comment = ''
//     this.userId = 1
//   }

//   send (text: string): void {
//     console.log(text)
//   }
// }

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export type DeleteDiaryEntry = Omit<DiaryEntry, 'date' | 'weather' | 'visibility' | 'comment' | 'userId'>

export interface UserEntry {
  id: number
  name: string
  lastname: string
  email: string
  password: string
  diaryId: number
}

export type NewUserEntry = Omit<UserEntry, 'id'>

export type NonSensitiveInfoUserEntry = Omit<UserEntry, 'password'>
