import { create } from 'zustand'

export const useExample = create<useExampleType>((set) => ({
  exampleList: [],

  addExample: (example: Example) => {
    set((state) => ({ exampleList: [...state.exampleList, example] }))
  }
}))

interface Example {
  id: number
}

interface useExampleType {
  exampleList: Example[]
  addExample: (example: Example) => void
}
