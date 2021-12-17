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
