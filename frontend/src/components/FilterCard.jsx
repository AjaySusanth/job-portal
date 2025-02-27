import { useEffect, useState } from "react"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useDispatch } from "react-redux"
import { setFilterJob } from "@/redux/jobSlice"

const FilterCard = () => {

    const fitlerData = [
        {
            fitlerType: "Location",
            array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai","Kochi"]
        },
        {
            fitlerType: "Role",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
        }
    ]
    const dispatch = useDispatch()
    const [filterValue,setFilterValue] = useState('')
    const handleChange = (value) => {
        setFilterValue(value)
    }

    useEffect(()=>{
        dispatch(setFilterJob(filterValue))
    },[filterValue])

    

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />

            <RadioGroup onValueChange={handleChange}>
                <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value="" />
                    <Label>Clear Filter</Label>
                </div>
                {
                    fitlerData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className='flex items-center space-x-2 my-2' key={index}>
                                            <RadioGroupItem value={item}/>
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>

    )
}
export default FilterCard