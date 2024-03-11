// import React from 'react';

// const ListComponent = ({ data }) => {
//   return (
//     <ul>
//       {data.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default ListComponent;

import React, { useState } from 'react';

const List = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default List;
