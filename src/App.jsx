import './App.css';
import taskData from './assets/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import SearchBox from './components/Table/SearchBox';
import Table from './components/Table/Table';
console.log( taskData );

function App ()
{

  return (
    <div className='bg-[#243f52] font-[Inter] text-white h-full'>
      <div>
        <div>
          <Nav />
        </div>
        <div className="pb-[114px] pt-20 md:mt-[100px] flex justify-center">
          <Hero />
        </div>
      </div>

      <div className='container mx-auto' id='tasks'>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 shadow-md hover:shadow transition-all duration-150">
          {/* search box and button */ }
          <div className='mb-14 items-center justify-between sm:flex'>
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <SearchBox/>
          </div>
          {/* Table */}
          <div>
            <Table taskData={ taskData } />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App
