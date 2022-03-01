import Background from './Background.js'
import Wrapper from './Wrapper.js'
import Container from './Container.js'

export default function Time() {
    return (
      <Wrapper className='row-start-3 sm:col-start-1'>
        <Container>
          <p className="font-krona text-blue-accent uppercase text-xs pb-3 w-4/5 md:text-sm">one night only</p>
          <p className="font-krona text-text-transparent uppercase text-xs leading-5 w-4/5 md:text-sm">May 7th<br></br>
          urbn center Lobby<br></br>
          5:00pm - 6:30pm</p>
        </Container>
        <Background />
      </Wrapper>
    )
  }
  