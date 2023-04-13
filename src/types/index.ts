export type TUser = {
  uuid: string
  name: string
  description: string
  tags: string[]
  image: string
  elo: string
  position: number
  module: number
  level: number
  xp: number
}

export type TLesson = {
  answer: string
  description: string
  id: string
  options: string[]
  question: string
}

export type TLevel = {
  description: string
  id: string
  lessons: TLesson[]
  level: string
  name: string
}

export type TModule = {
  description: string
  id: number
  levels: TLevel[]
  name: string
}

export type TRoot = {
  modules: TModule[]
}
