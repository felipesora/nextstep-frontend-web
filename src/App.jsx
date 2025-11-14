import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard"
import Trilhas from "./pages/Trilhas";
import LayoutPadrao from "./components/LayoutPadrao";
import CadastroTrilhas from "./pages/CadastroTrilhas";
import DetalhesTrilha from "./pages/DetalhesTrilha";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          {/* Rota sem barra lateral */}
          <Route path="/login" element={<Login />}/>

          {/* Rotas com a barra lateral */}
          <Route element={<LayoutPadrao />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/cadastro-trilha" element={<CadastroTrilhas />} />
              <Route path="/detalhes-trilha/:id" element={<DetalhesTrilha />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
