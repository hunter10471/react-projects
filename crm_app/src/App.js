import { useEffect, useState } from "react";
import { Chart } from "./components/Chart";
import { Piechart } from "./components/Piechart";
import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";
import { Topbar } from "./components/Topbar";
import { TopCard } from "./components/TopCard";
import MenuIcon from '@mui/icons-material/Menu'
import { Reviews } from "./components/Reviews";
import { HorizontalChart } from "./components/HorizontalChart";
import { Orders } from "./components/Orders";
import { BrushBarChart } from "./components/BrushBarChart";
import { useInView } from 'react-intersection-observer';


function App() {
  const [nav,setNav] = useState(true)
  const size = useWindowSize();
  useEffect(()=>{
    size.width <= 1450 ? setNav(false) : setNav(true) 
  },[size])

  const { ref, inView, entry } = useInView({

    threshold: 0,
  });

  return (
    <>
    <div className="flex bg-slate-100">
    <MenuIcon onClick={()=>setNav(!nav)}  className={`transition-all duration-200 absolute top-5 ${nav ? 'left-[22vw]' : 'left-[75px]'} cursor-pointer text-black`} />
      <Sidebar nav={nav} />
      <div className={` transition-all duration-200 w-full ${nav ? 'ml-[20vw]' : 'ml-[65px]'}  text-secondary`}>
       <Topbar/>
          <h1 className="absolute md:text-4xl font-heading font-semibold m-10">Overview</h1>
        <div ref={ref} className={`flex flex-wrap transition-all duration-1000  ${inView ? 'translate-y-0 opacity-100 ' : 'translate-y-20 opacity-0 ' } lg:flex-row md:flex-col mt-20`}>
          <div className="flex w-[90%] lg:w-[50vw] mx-auto p-5 flex-col flex-wrap" >
            <div className="flex flex-1 flex-wrap justify-center">
          <TopCard title={"Total Profit"} amount={"$54,0675"} percentage={32.75} sign={"+"}  />
          <TopCard title={"Total Expenses"} amount={"$1,04,565"} percentage={16.05} sign={"-"}  />
          <TopCard title={"Total Users"} amount={"2,40,405"} percentage={45.65} sign={"+"}  />
            </div>
          <Chart/>
          </div>
          <div className="overflow-auto flex flex-1 min-h-[700px] max-h-[700px] max-w-[950px] min-w-[400px] mt-7 mx-5 p-5 shadow-lg rounded-md flex-col bg-white">
            <h2 className="text-xl tracking-wide font-bold font-heading  w-full rounded-t px-10 mt-5 my-5">Top trending products</h2>
          <Table/>
          </div>
        </div>
          <div ref={ref} className="flex items-center justify-center flex-wrap mx-auto max-w-[90%]">
          <Piechart/>
          <Reviews/>
          </div>
          <div className="flex items-center justify-center flex-wrap w-[95%] mx-auto ">
          <div className="flex-1 m-5 rounded-md shadow-lg bg-white p-10 min-w-[500px] h-[500px]">
            <h1 className="text-xl mb-5 font-heading font-semibold ">Yearly Sales</h1>
            <HorizontalChart/>
          </div>
          <div className="flex-1 m-5 rounded-md shadow-lg bg-white p-10  min-w-[500px] h-[500px]">
            <h1 className="text-xl mb-5 font-heading font-semibold ">Cumulative Finances</h1>
            <BrushBarChart/>
          </div>
          </div>
          <div className="w-[95%] m-10 overflow-auto rounded-md shadow-lg bg-white p-10 mx-auto min-w-[300px]">
            <h1 className="text-xl mb-5 font-heading font-semibold ">Orders</h1>
            <Orders/>
          </div>
          <div className="text-[12px] text-center ">
            ALL RIGHTS RESERVED BY THE RESPECTIVE OWNER OF THE APPLICATION ©
          </div>
      </div>
    </div>
    </>
  );
}

function useWindowSize() {
  
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 
  return windowSize;
}

export default App;