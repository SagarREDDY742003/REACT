import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login, logout } from "./Store/AuthSlice";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser().then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
      <div className="min-h-screen flex flex-wrap content-between bg-slate-300">
          <div className="w-full block">
              <Header />
              <main>
                  <Outlet />
              </main>
          </div>
          <div className="w-full block">
              <Footer />
          </div>
      </div>
  ) : null;
}

export default App