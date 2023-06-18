import './styles/App.css'
import LoginPage from './pages/loginpage';
import Navbar from './components/navBar';
import Footer from './components/footer';
function App() {
    return (
        <div>
            <Navbar/>
            <LoginPage/>
            <Footer/>
        </div>
    )
}

export default App
