import { BrowserRouter,Route,Routes } from "react-router-dom";

import Play from "./Components/Play";
import Result from './Components/Result';

function App() {
  return (
<div className="parent-page">


<BrowserRouter>
      <Routes>
      <Route path="/" element={<Play/>}>
   
        </Route>
        <Route path="result" element={<Result/>}>
   
   </Route>
      </Routes>
    </BrowserRouter>

</div>
  );
}

export default App;
