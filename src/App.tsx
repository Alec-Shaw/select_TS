import { useState } from "react";
import { Select, SelectOptions } from "./Select";


const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 1 },
  { label: "Thrid", value: 1 },
  { label: "Fourth", value: 1 },
  { label: "Fifth", value: 1 }

]

export const App = () => {

  const [value1, setValue1] = useState<SelectOptions[]>([options[1]])
  const [value2, setValue2] = useState<SelectOptions | undefined>(options[1])

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </>
  );
}

export default App
