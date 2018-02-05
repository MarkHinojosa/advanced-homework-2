import React from 'react';

const TopNav = (props) => {
  console.log(props.changeCategory)
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li><a onClick={() => props.changeCategory('tires')} >tires</a></li>
          <li><a onClick={() => props.changeCategory('headlights')} >car lights</a></li>
          <li><a onClick={() => props.changeCategory('wheels')}>Car wheels</a></li>
          <li><a onClick={() => props.changeCategory('bumpers')}>car bumpers</a></li>
          <li><a onClick={() => props.changeCategory('audio')}>car audiosystem</a></li>
          <li><a onClick={() => props.changeCategory('truck bumpers')}>Truck bumpers</a></li>
          <li><a href="contact.html">Feedback</a></li>
          <div className="clear"> </div>
        </ul>
      </div>
    </div>
  )
}

export default TopNav;