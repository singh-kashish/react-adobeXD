import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home    from './pages/Home/Home';
import Login   from './pages/Login/Login';
// import Signup  from './pages/Signup/Signup';
// import Profile from './pages/Profile/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/"        element={<Home />} />
           <Route path="/login"   element={<Login />} />
          {/*<Route path="/signup"  element={<Signup />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="*"        element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}