import BSOE from "./components/BSOE"
import Selectors from "./components/GameSelectors"
import Pick2GroupJoint from "./components/Pick2Group(Joint)"
import Pick2Joint from "./components/Pick2Joint"
import SumOf2 from "./components/SumOf2"
import All5 from "./Royal5/All5/All5"
// import { All5Group120 } from "./Royal5/All5/All5";

const App = () => {
  return (
    <>
      <Selectors totalRows={5} vs />
      {/* <All5StraightJoint/> */}
      {/* <All5/> */}
      {/* <BSOE/> */}
      {/* <Pick2GroupJoint/> */}
      {/* <Pick2Joint/> */}
      {/* <SumOf2/> */}
    </>
  )
}

export default App
