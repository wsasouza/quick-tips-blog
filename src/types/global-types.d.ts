export {}
declare global {
  export type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }
}
