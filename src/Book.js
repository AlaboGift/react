import React from 'react'

const Book = ({ img, title, author }) => {
  //destructuring props
  //const { img, title, author } = props
  //events
  //attribute, eventHandler, onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className='book'>
      <img src={img} alt='' height='210' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  )
}

export default Book
