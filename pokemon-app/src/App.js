import { Suspense, lazy } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Card } from "./Card";
const LazyLoadList = lazy(() => import("./List"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadList />
            </Suspense>
          }
        />
        <Route exact path="/pokemon" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
