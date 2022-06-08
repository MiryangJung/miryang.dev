import styled from '@emotion/styled'

export const MDXPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-weight: 400;
  font-size: 17px;

  * {
    color: var(--tx-sub);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--tx-main);
  }

  a {
    color: var(--tx-accent);
    text-decoration: underline;
    transition: all 0.2s;

    &:hover {
      color: var(--tx-accent-light);
    }
  }

  h1 {
    font-size: 29px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h2 {
    font-size: 25px !important;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h3 {
    font-size: 21px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h4 {
    font-size: 18px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h5 {
    font-size: 17px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h6 {
    font-size: 16px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    border-left: var(--tx-accent-light) 5px solid;
    margin: 10px 0;
    padding: 0 10px;

    & p {
      display: inline;
      color: var(--tx-sub);
    }
  }

  code {
    border: solid 1px var(--tx-accent);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 14px;
    font-weight: 500;
  }

  .code-highlight {
    padding: 1em;
    border: 1px solid var(--tx-accent-light);
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  ol {
    margin: 0;
    padding-left: 20px;
  }

  li {
    padding: 3px 0;
  }

  table {
    border-collapse: collapse;
  }

  thead {
    border-bottom: 2px solid #333;
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  td {
    padding: 5px 0;
  }

  th {
    font-weight: 500;
  }

  sup a {
    font-size: 12px;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }
`

export const MDXPostTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  word-break: keep-all;
`

export const MDXPostDate = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: var(--tx-sub-dark);
  word-break: keep-all;
  margin-bottom: 20px;
`
