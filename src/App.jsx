import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import Notfound from "./pages/Notfound"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"
export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3pb-12">
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<Notfound />} />
                <Route path='/*' element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}