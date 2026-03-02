import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import ClientesPage from './pages/clientes/ClientesPage';
import EmpresaPage from './pages/empresa/EmpresaPage';
import InscripcionPage from './pages/empresa/InscripcionPage';
import ContactoPage from './pages/empresa/ContactoPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="clientes" element={<ClientesPage />} />
                <Route path="empresa">
                    <Route index element={<EmpresaPage />} />
                    <Route path="inscripcion" element={<InscripcionPage />} />
                    <Route path="contacto" element={<ContactoPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
