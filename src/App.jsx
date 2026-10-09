import Navbar from "./components/Navbar"
import Home from "./pags/Home";
import Footer from "./components/Footer"
const App =()=>{





  return(
    <>
     <Navbar/>
      
      <main className="pt-16">
        <Home/>
      </main>

      <Footer/>
     
     
    </>
  )
}
export default App;