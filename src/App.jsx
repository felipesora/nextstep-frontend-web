import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard"
import Trilhas from "./pages/Trilhas";
import LayoutPadrao from "./components/LayoutPadrao";
import CadastroTrilhas from "./pages/CadastroTrilhas";
import DetalhesTrilha from "./pages/DetalhesTrilha";
import EditarTrilhas from "./pages/EditarTrilhas";
import CadastroConteudo from "./pages/CadastroConteudo";
import EditarConteudo from "./pages/EditarConteudo";
import Usuarios from "./pages/Usuarios";
import EditarUsuarios from "./pages/EditarUsuarios";
import Solicitacoes from "./pages/Solicitacoes";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          {/* Rota sem barra lateral */}
          <Route path="/login" element={<Login />}/>

          {/* Rotas com a barra lateral */}
          <Route element={<LayoutPadrao />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/editar-usuario/:id" element={<EditarUsuarios />} />
              <Route path="/solicitacoes-conta" element={<Solicitacoes />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/cadastro-trilha" element={<CadastroTrilhas />} />
              <Route path="/detalhes-trilha/:id" element={<DetalhesTrilha />} />
              <Route path="/editar-trilha/:id" element={<EditarTrilhas />} />
              <Route path="/trilha/:idTrilha/cadastro-conteudo" element={<CadastroConteudo />} />
              <Route path="/trilha/:idTrilha/editar-conteudo/:idConteudo" element={<EditarConteudo />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
