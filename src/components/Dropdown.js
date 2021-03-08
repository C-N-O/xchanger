import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
  const [open, setOpen] = useState(false); //we use this state to determin when to add or remove our visible classes
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        //If the element that was clicked is inside our component, we return
        if (ref.current && ref.current.contains(event.target)) return;

        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = props.currencies.map((el) => {
    //if el is the same as the selected option, do not display el on the list
    if (el.value === props.selectedCurrency.value) return;

    return (
      <div
        key={el.value}
        onClick={() => props.onSelectedOptionChange(el)}
        className='item'
      >
        {el.name}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div ref={ref} className='ui search dropdown'>
        <div className='field'>
          <label className='label'>{props.label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{props.selectedCurrency.name}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
