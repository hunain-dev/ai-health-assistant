import Header from '../../../Components/Header'
import { CiCirclePlus } from "react-icons/ci";
import Button from '../../../Components/Button';
import { IoIosSend } from 'react-icons/io';
import frameflowesr from "../../../assets/images/grass-flowers-realistic-border-vector-removebg-preview.png"
const Home = () => {

 
  return (
    <>
     <div className='h-full w-full  bg-[#F9F9F9] '>
        <Header/>
        <div className='h-full w-full  mt-7 grid grid-cols-1 '>
        <div className='h-full w-full    '>
            <div className='h-full flex items-center justify-start flex-col w-full'>
                <h2 className='actay text-center text-4xl leading-9'>AI that cares — because <br />
                your health matters.</h2>
                <p  className='actay text-[1.2vw] mt-4'>"AI that cares — because your health matters."</p>
 
                <div className='h-full  mt-10 w-full flex px-10  items-center justify-center '>
                    <div className='h-[32vh]  grid grid-cols-1 gap-9 rounded-3xl w-[50%]  overflow-hidden bg-[#232A27] '>
                    <input
  type="text"
  placeholder="Ask me anything about your health — symptoms, or tips to feel better!"
  className="actay px-3 border-0 text-white w-full py-2 bg-transparent outline-none placeholder-white"
/>

<div className='h-full w-full  grid grid-cols-[2fr_1.1fr]'>
 <div className='h-full px-3 flex items-center justify-start  gap-2'>
    <CiCirclePlus className='text-3xl text-white'/>
    <div onClick={()=>{


    }}></div>
    <Button   text="Login/Signup" className="bg-none border-1 text-[0.8vw] border-white text-white px-6 py-0.3"/>
    <Button text="Add an image" className="bg-none border-1 text-[0.8vw] border-white text-white px-7 py-1"/>

    
    </div>    
 <div className='h-full  flex items-center justify-end px-2'>
 <IoIosSend  className='text-black py-1 bg-white rounded-2xl text-3xl ' />

    </div>    

</div>


                    </div>
                </div>
            </div>
        </div>
        <div className="h-full  w-full">
  <div className="back relative -top-20 h-full w-full flex items-center justify-center ">
    
    <div className='flex items-center justify-center h-full w-full overflow-hidden'>
    <img src={frameflowesr} className="h-full w-full object-cover  brightness-65 " alt="" />
    <img src={frameflowesr} className="h-full w-full object-cover  brightness-65 " alt="" />
    <img src={frameflowesr} className="h-full w-full object-cover  brightness-65" alt="" />
    </div>

    <div className="front absolute grid  px-3 py-5 grid-cols-2 top-65 overflow-hidden left-0 min-h-[33vh] bg-[#262D2A] w-full z-10">
        <div className='h-full text-white opacity-80 flex items-center justify-start '>
            <h4 className='actay text-[1.6vw] leading-7'>A smart path to  <br />
            stay ahead of ilness</h4>
        </div>
        <div className='h-full text-white px-9 w-1xl opacity-80 flex items-center justify-start '>
            <p className='actay text-[1.5vw] '>A paragraph is a distinct section of a wriconsisting of one or more sentences. It is typically marked by an indent on a new line</p>
        </div>
    </div>

  </div>
</div>


        </div>
    </div>
    
    </>
   
  )
}

export default Home
