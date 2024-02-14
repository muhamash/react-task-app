import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <div>
        <div>
          <Nav/>
        </div>
        <div className="pb-[114px] pt-20 md:mt-[100px] flex justify-center">
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default App
