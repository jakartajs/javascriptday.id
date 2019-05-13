export type NodeArray<T> = { node: T }[]

export interface SiteMetadata {
  title: string
  description: string
  author: {
    name: string
    url: string
  }
}
