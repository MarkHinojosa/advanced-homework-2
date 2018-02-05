import React from 'react';

const ProductDetail = (props) => {

  const blah = (props) => {
    return (
      props.products.map((cur, ind) => {
        return (
          <div className="grid_1_of_5 images_1_of_5">
            <img src={cur.imgUrl} />
            <h3>{cur.name} </h3>
            <p>{cur.description} </p>
            <h4>{cur.price}</h4>
            <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
          </div>
        )
      }
      )
    )
  }
  return (
    <div>
      {blah(props)}
    </div>
  )
}

export default ProductDetail;