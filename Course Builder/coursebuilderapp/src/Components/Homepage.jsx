import Additems from './Additems';
import Nav from './Nav';
import { useContext,  } from 'react';
import { myContext } from '../App';
function Homepage() {
    const {setMydata, mydata} = useContext(myContext);

    return (
        <>
        <Nav />

            <div  onClick={()=>setMydata(false)} className=' ab flex justify-center flex-col gap-[5px] items-center h-[90vh]'>
                <div>
                    <img className='w-[260px]' src={require('../images/add.png')} alt="" />

                </div>
                <div className='flex items-center justify-center flex-col gap-2'> 
                    <h1 className='font-bold'>Nothing Added here yet</h1>
                    <span>Click on the [+] Add button to add items to this course</span>
                </div>
                <div className='absolute top-[60px] right-[100px]'>
            <Additems/>
            </div>
            </div>
           
        </>
    )
}
export default Homepage;