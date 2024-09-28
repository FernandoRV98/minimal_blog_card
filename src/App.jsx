import React from 'react'
import './card/Card.css'
import { Card } from './card/Card.jsx'
import image_cactus from './cactus_img.jpg'
import './index.css'

//src\cactus_img.jpg
const cardData = [
  {
    imageUrl: image_cactus,
    tag: 'Design',
    title: 'Embracing Minimalism',
    description: 'From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.',
   attribution: 'Annie Spratt'
  }
]

export function App() {
  return (
    <section className='app-container'>
      {
        cardData.map(({ imageUrl, tag, title, description, attribution }) => (
          <Card
            key= {title}
            imageUrl={imageUrl}
            tag={tag}
            title={title}
            description={description}
            attribution={attribution}
          />
        ))
      }
    </section>
  )
}
