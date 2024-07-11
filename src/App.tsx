
import { SuspenseUseContainer } from "./SuspenseUse/SuspenseUseContainer";
import {SuspenseLongRenderContainer} from './SuspenseLongRender/SuspenseLongRenderContainer';


function App() {
  return (
    <>
      <SuspenseUseContainer />
      <SuspenseLongRenderContainer />
    </>
  );
}

export default App;
