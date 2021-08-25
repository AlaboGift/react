import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
//set up vars
const firstBook = {
  title: 'Yeezy',
  author: 'Amala Hepworth',
  img: './yeezy.png',
}

const secondBook = {
  title: 'Nike',
  author: 'Akmmala Hepworth',
  img: './nike.png',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  //destructuring props
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' height='210' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
