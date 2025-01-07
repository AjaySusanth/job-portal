import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setJobSearch } from "@/redux/jobSlice"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSearch = () => {
        dispatch(setJobSearch(search))
        navigate("/browse")
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder="Find your dream job"
                        className='outline-none border-none w-full'
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <Button onClick={handleSearch} type='button' className="rounded-r-full bg-[#6A38C2]">
                        <Search className='size-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Hero