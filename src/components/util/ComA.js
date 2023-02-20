import React, {createContext} from 'react';
import ComB from './ComB';

const DataPass = createContext();

const ComA = () => {
  return (
    <DataPass.Provider value={'Component A'}>
      <ComB />
    </DataPass.Provider>
  );
};

export default ComA;
export {DataPass};
