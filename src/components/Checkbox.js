import React from 'react';

const Checkbox = (props) => {

  return (
    <input type="checkbox" checked={props.checked} onChange={props.handleAlphabeticalSort} />
  )

}

export default Checkbox