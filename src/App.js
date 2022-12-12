import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import DetailUser from "./components/DetailUser";
import ListTodo from "./components/ListTodo";
import ListUser from "./components/ListUser";


export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Acceuil />}>
          <Route  index element={<ListUser />} />
          <Route path='todo/:id'element={<ListTodo />} />
          <Route path='data/:id' element={<DetailUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
