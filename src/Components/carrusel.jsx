import React from 'react'
import { Slider } from 'infinite-react-carousel/lib'

import './Slider.css'

const Carousel = (props) => {
	let {eventos} = props
	return (
		<section className='slider'>
			<Slider className='slider__content' autoplay>

				{eventos.map((event) => (
					<div key={event.key} className='slider__content--item'>
						<h1 className='slider__title'>{event.event_name}</h1>
						<img src={event.event_img} alt={event.event_name} />
						<p className='slider-description'>{event.event_ubication}</p>
					</div>
				))}
			</Slider>
		</section>
	)
}

export default Carousel