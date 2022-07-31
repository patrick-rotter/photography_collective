import create from 'zustand'

type StoreState = {
  activeIndex: number
  setActiveIndex: (newIndex: number) => void
  isMovingLeft: boolean
  setIsMovingLeft: (value: boolean) => void
  pathLength: number
  setPathLength: (length: number) => void
}

export const useStore = create<StoreState>((set) => ({
  activeIndex: 0,
  setActiveIndex: (newIndex: number) => {
    set({ activeIndex: newIndex })
  },
  isMovingLeft: true,
  setIsMovingLeft: (value: boolean) => {
    set({ isMovingLeft: value })
  },
  pathLength: 0,
  setPathLength: (length: number) => {
    set({ pathLength: length })
  }
}))
