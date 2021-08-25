import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => <img src='./shoe.png' alt='' height='210' />
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Amala Hepworth
  </h4>
)
const Title = () => <h1>I love you to the moon and back</h1>
ReactDom.render(<BookList />, document.getElementById('root'))
