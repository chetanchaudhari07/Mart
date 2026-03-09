import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const User = lazy(() => import("./pages/users"));
const Product = lazy(() => import("./pages/product"));
const Transaction = lazy(() => import("./pages/transaction"));

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h2 className="logo">Dashboard</h2>

        <div className="nav-links">
          <Link to="/">Users</Link>
          <Link to="/product">Products</Link>
          <Link to="/transaction">Transactions</Link>
        </div>
      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;