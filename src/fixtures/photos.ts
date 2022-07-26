import { Photo } from '../global/types'

export const photos: Photo[] = [
  {
    id: 1,
    author: 'Johanna Hobel',
    commissionedFor: 'Vogue',
    url: './media/image01.jpg',
    text: 'Everyday Flowers',
    date: new Date(2019, 5),
    link: 'link'
  },
  {
    id: 2,
    author: 'Johanna Hobel',
    commissionedFor: 'wild',
    url: './media/image02.jpg',
    text: 'The wilder Night',
    date: new Date(2019, 11),
    link: 'link'
  },
  {
    id: 3,
    author: 'Johanna Hobel',
    commissionedFor: 'Chanel',
    url: './media/image03.jpg',
    text: 'Smooth Memories',
    date: new Date(2020, 1),
    link: 'link'
  },
  {
    id: 4,
    author: 'Johanna Hobel',
    commissionedFor: 'ON',
    url: './media/image04.jpg',
    text: 'The Future Universe',
    date: new Date(2020, 3),
    link: 'link'
  },
  {
    id: 5,
    author: 'Johanna Hobel',
    commissionedFor: 'SI',
    url: './media/image05.jpg',
    text: 'She Was Born Urban',
    date: new Date(2021, 11),
    link: 'link'
  }
]
