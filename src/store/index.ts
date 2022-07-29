import create from 'zustand'
import { Photo } from '../global/types'
import { photos } from '../fixtures/photos'

type StoreState = {
  activePhoto: Photo
  setActivePhoto: (index: number) => void
}

export const useStore = create<StoreState>((set) => ({
  activePhoto: photos[0],
  setActivePhoto: (index: number) => {
    set({ activePhoto: photos[index] })
  }
}))
