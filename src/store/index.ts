import create from 'zustand'

type StoreState = {
  offset: number
  setOffset: (newOffset: number) => void
  pathLength: number
  setPathLength: (length: number) => void
}

export const useStore = create<StoreState>((set) => ({
  offset: 0,
  setOffset: (newOffset: number) => {
    set({ offset: newOffset })
  },
  pathLength: 0,
  setPathLength: (length: number) => {
    set({ pathLength: length })
  }
}))
