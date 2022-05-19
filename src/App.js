import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProdukList from './components/ProdukList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
    return (
        <div className="App container">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProdukList />} />

                    <Route path="/add" element={<AddProduct />} />

                    <Route path="/edit/:id" element={<EditProduct />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
