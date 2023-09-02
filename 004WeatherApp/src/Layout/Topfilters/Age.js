import React, { useState } from 'react';

function AgeCheckBoxes(props) {
  const [listOfAgesSelected, setListOfAgesSelected] = useState([
    '0-3',
    '4-6',
    '7-12',
    '13-15',
    '16-Above',
  ]);

  const checkboxes = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  };

  if (listOfAgesSelected.includes('0-3')) {
    checkboxes.checkbox1 = true;
  }
  if (listOfAgesSelected.includes('4-6')) {
    checkboxes.checkbox2 = true;
  }
  if (listOfAgesSelected.includes('7-12')) {
    checkboxes.checkbox3 = true;
  }
  if (listOfAgesSelected.includes('13-15')) {
    checkboxes.checkbox4 = true;
  }
  if (listOfAgesSelected.includes('16-Above')) {
    checkboxes.checkbox5 = true;
  }

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    // Call a function or perform actions based on checkbox changes here
    if (name === 'checkbox1') {
      console.log(name);
      console.log('hi');
      if (checked === true) {
        setListOfAgesSelected((prevState) => prevState.push('0-3'));
      } else {
        setListOfAgesSelected((prevState) => prevState.pop('0-3'));
      }
    }
    // } else if (name === 'checkbox2') {
    //   // Do something when checkbox2 changes
    // } else if (name === 'checkbox3') {
    //   // Do something when checkbox2 changes
    // } else if (name === 'checkbox4') {
    //   // Do something when checkbox2 changes
    // } else if (name === 'checkbox5') {
    //   // Do something when checkbox2 changes
    // }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        '0-3'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        '4-6'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        '7-12'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        '13-15'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        '16-Above'
      </label>
    </div>
  );
}

export default AgeCheckBoxes;
