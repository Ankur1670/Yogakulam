import { useState } from 'react'
import Layout from "./layout/Layout"
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init();

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout/>
  )
}

export default App
