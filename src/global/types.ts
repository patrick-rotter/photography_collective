export type Photo = {
  id: number
  author: string
  commissionedFor: string
  url: string
  text: string
  date: Date
  link: string
  onPress?: () => void
  exitAnimation?: string
}

// $ = transient props (https://stackoverflow.com/questions/57586654/styled-component-attrs-react-does-not-recognize-prop)
export type StyledPhotoType = {
  $width: number
  $height: number
  $marginTop?: number
  $marginLeft?: number
  $top?: number
  $bottom?: number
  $right?: number
  $left?: number
}
