import { useState } from 'react';

function App() {

  const [count, setCount] = useState(22)

  const plus = (n) => {
    setCount(count + n)
  };

  return (
      <div className="App">

        <input onChange={e => setCount(+e.target.value)}/>

          {count}
        <button onClick={() => plus(1)}>Plus 1</button>
        <button onClick={() => plus(2)}>Plus 2</button>

      </div>
  );
}

export default App;
