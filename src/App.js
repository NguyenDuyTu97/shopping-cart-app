import {
  BrowserRouter, Route, Routes, Link,
} from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
