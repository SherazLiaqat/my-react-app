import React from 'react';

export default function ExpenseFilter(props) {
    
  return <div>
      <div>
          <label>Selet year</label>
      <select value={props.selected} onChange={props.yearChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
      </select>
  </div>
  </div>
}
