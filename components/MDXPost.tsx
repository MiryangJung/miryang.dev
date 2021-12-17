import { MDXPostContainer, MDXPostDate, MDXPostTitle } from './MDXPost.style'
import usDateString from '../lib/usDateString'

const MDXPost = ({ title, date, children }) => {
  return (
    <MDXPostContainer>
      <MDXPostTitle>{title}</MDXPostTitle>
      {date && <MDXPostDate>{usDateString(date)}</MDXPostDate>}
      {children}
    </MDXPostContainer>
  )
}

export default MDXPost
