export type Project = {
  title: string
  description: string
  url: string
  image: string
}

export type TreeNode = {
  title: string
  date: string
  urlPath: string
  children: TreeNode[]
}

export type TreeRoot = TreeNode[]

export type PathSegment = { pathName: string }

export type tColors =
  | '#696262'
  | '#9088D4'
  | '#7c889f'
  | '#6C92BE'
  | '#8DB596'
  | '#c4a583'
  | '#BB8395'

export type tGuestbooks = {
  [key: string]: Array<{
    content: string
    color: tColors
    createdAt: string
  }>
}
