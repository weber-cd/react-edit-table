import React from 'react';
import Datasheet from './sheet'
// import Dropdown from '@beisen-phoenix/field-dropdown';

const DatasheetContainer  = (props) => {
  // console.log('DatasheetContainer data:', JSON.stringify(props.data, null, '  '))
  return (
    <div className="datasheet-container">
      <Datasheet {...props} />
    </div>
  );
};

export default DatasheetContainer
