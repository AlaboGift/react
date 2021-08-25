import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
//set up vars
const books = [
  {
    id: 1,
    title: 'Yeezy',
    author: 'NGN15,000',
    img: './yeezy.png',
  },
  {
    id: 2,
    title: 'Nike',
    author: 'NGN10,000',
    img: './nike.png',
  },
  {
    id: 3,
    title: 'Air Jordan',
    author: 'NGN20,000',
    img: './jordan.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  //destructuring props
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' height='210' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
