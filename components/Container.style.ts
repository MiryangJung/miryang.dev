import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const ContainerContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 700px;
  align-items: center;
  z-index: 10;
  ${mq()({
    padding: ['0 20px', '0'],
  })}
`
