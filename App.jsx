import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="div1">

        <input type="display" readOnly id="display" value={value} />
        <form action=" ">

          <div className="Button">
            <br />
            <input type="button" value={'C'}  className="clear" onClick={e => setValue(value.slice(0,-1))} />
            <input type="button" value={'CE'} className="clear1" onClick={e => setValue(' ')} />
            <br />
            <input type="button" value={7} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={8} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={9} onClick={e => setValue(value + e.target.value)} />
            <input type="button" placeholder="÷" value={'/'} onClick={e => setValue(value + e.target.value)} />
            <br />
            <input type="button" value={4} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={5} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={6} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'*'} onClick={e => setValue(value + e.target.value)} />
            <br />
            <input type="button" value={1} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={2} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={3} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'+'} onClick={e => setValue(value + e.target.value)} />
            <br />
            <input type="button" className="zero" value={0} onClick={e => setValue(value + e.target.value)} />

            <input type="button" value={"="} onClick={e => setValue(eval(value))} />
            <input type="button" value={'-'} onClick={e => setValue(value + e.target.value)} />
          </div>
        </form>
      </div>
    </>
  );
}

export default App
