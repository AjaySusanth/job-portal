
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { useNavigate } from "react-router-dom"

const JobCard = ({job}) => {
    const navigate = useNavigate()
    const daysAgo = (mongoTime) => {
        const createdAt = new Date(mongoTime)
        const currentTime = new Date()
        const timeDiff = currentTime - createdAt
        return Math.floor(timeDiff/(1000*24*60*60))
    }
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgo(job?.createdAt) == 0 ? 'Today' : `${daysAgo(job?.createdAt)} days ago`}</p>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOIExes7SkKMj61zdgksPGqTv-mIEPVod6w&s' />
                    </Avatar> 
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>{job?.location}</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}
export default JobCard