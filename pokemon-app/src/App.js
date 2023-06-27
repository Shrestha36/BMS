import { Routes, BrowserRouter, Route } from "react-router-dom";
import List  from "./List"
import  {Card}  from "./Card"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route exact path="/pokemon" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;