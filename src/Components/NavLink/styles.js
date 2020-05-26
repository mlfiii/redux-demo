import styled from 'styled-components'

export const Li = styled.li`
  ${p =>
    p.link === p.pathname &&
    `
    background-color: rgba(0, 0, 0, 0.1);
  `}
`
