import React from 'react';
import Datasheet from './datasheet.component'

const DatasheetContainer  = (props) => {
  // console.log('DatasheetContainer data:', JSON.stringify(props.data, null, '  '))
  return (
    <div className="datasheet-container">
      <Datasheet {...props}/>
    </div>
  );
};

export default DatasheetContainer