import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Table from './components/Table/Table';

function App() {
  return (
    <div className='bg-[#707375] font-[Inter] text-white h-full'>
      <div>
        <div>
          <Nav />
        </div>
        <div className="pb-[114px] pt-20 md:mt-[100px] flex justify-center">
          <Hero />
        </div>
      </div>

      <div className='container mx-auto' id='tasks'>
          <Table/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App
