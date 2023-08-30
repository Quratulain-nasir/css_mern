import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Header() {
  return (
  <>
    <Carousel slide={false}>
      <Carousel.Item>
        < img src="https://dcassetcdn.com/design_img/789594/119477/119477_4735335_789594_image.jpg" alt="Slide 1"  className='img-fluid' style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://pbs.twimg.com/media/EQZA5mZUEAIEd-n.jpg" alt="Slide 2" className='img-fluid' style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  
  </>
  )
}

export default Header
