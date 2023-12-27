import { UserEntry, NonSensitiveInfoUserEntry, NewUserEntry } from '../types'
import usersData from './users.json'

const users: UserEntry[] = usersData as UserEntry[]

export const allUsers = (): NonSensitiveInfoUserEntry[] => {
  return users.map(({ id, name, lastname, email, diaryId }) => {
    return {
      id,
      name,
      lastname,
      email,
      diaryId
    }
  })
}

export const addUser = (newUserEntry: NewUserEntry): UserEntry => {
  const newUser = {
    id: Math.max(...users.map(u => u.id)) + 1,
    ...newUserEntry
  }

  users.push(newUser)

  return newUser
}
