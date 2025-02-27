import { setAllJobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constants"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

const useGetAllJobs = () => {
    const dispatch = useDispatch()
    const {jobSearch} = useSelector(store=>store.job)
    useEffect(()=>{
        const fetchAllJobs = async() => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${jobSearch}`,{withCredentials:true});
                if(res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchAllJobs()
    },[])
}
export default useGetAllJobs