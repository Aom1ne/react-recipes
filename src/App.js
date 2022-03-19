import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes basename="/react-recipes">
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
