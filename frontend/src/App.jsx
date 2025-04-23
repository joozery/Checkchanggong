import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'; // 👈 เพิ่ม Footer เข้ามา

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer /> {/* 👈 แสดง Footer ด้านล่างสุดของหน้า */}
    </>
  );
}

export default App;
