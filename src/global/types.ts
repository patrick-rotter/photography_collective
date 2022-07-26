export type Image = {
  id: number;
  author: string;
  commissionedFor: string;
  url: string;
  text: string;
  date: Date;
  link: string;
};

export type SlideshowImage = {
  activeIndex: number;
  isMovingLeft: boolean;
  onPress?: () => void;
};

// $ = transient props (https://stackoverflow.com/questions/57586654/styled-component-attrs-react-does-not-recognize-prop)
export type StyledImageType = {
  $width: number;
  $height: number;
  $marginTop?: number;
  $marginLeft?: number;
  $top?: number;
  $bottom?: number;
  $right?: number;
  $left?: number;
};

export type StyledContentType = {
  background: string;
};

export type StyledIndicatorType = {
  active: boolean;
};
