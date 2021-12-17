import facepaint from 'facepaint'

const deviceWidth = {
  m: 750,
}

const mq = (breakpoints = deviceWidth) => {
  const mediaQueries = Object.values(breakpoints)
    .sort((curr, next) => curr - next)
    .map(breakpoint => `@media(min-width: ${breakpoint}px)`)

  return facepaint(mediaQueries, { overlap: true })
}

export default mq
