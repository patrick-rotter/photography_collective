/* Custom modulo function, as %-operator in JS is not mathematical modulo
but rather the remainder of a value ("= ein Vertreter der gleichen Restklasse") */
export const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m
}
