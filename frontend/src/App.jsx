import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import MyOrder from './screens/MyOrders';
import { CartProvider } from './components/Context_Reducer'

function App() {
    return (
        <CartProvider >
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/myorder" element={<MyOrder />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

