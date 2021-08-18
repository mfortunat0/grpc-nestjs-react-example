import axios from "axios";
import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const request = async (e) => {
    e.preventDefault();
    console.log(
      await (
        await axios.get(
          `http://localhost:3001?number=${inputRef.current.value}`
        )
      ).data
    );
  };

  return (
    <form onSubmit={(e) => request(e)}>
      <input required type="number" ref={inputRef} />
      <input type="submit" value="Send" />
    </form>
  );
}

export default App;
