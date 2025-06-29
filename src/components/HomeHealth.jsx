import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeHealth = () => {
  return (
    <div>
        {/* Home Section Health header  */}
        <div className="flex items-center gap-x-2 justify-center">
            <div className="w-[2px] h-[1rem] bg-red-700"></div>
            <div className="flex items-center gap-x-2">
                <span className="text-base text-zinc-800 font-semibold">Health</span>
                <span className="h-[1px] w-[11rem] bg-zinc-700 inline-block"></span>
            </div>
            <Link to={{pathname: '/health'}}><p className="text-base text-red-700 font-semibold flex gap-x-2 items-center">View All <FaArrowUpRightFromSquare/></p></Link>
        </div>

        <div>
            <HomeHealthData/>
        </div>
    </div>
  )
}

export default HomeHealth


export const HomeHealthData = () => {
    const [healthData, setHealthData] = useState();
    console.log(healthData)
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                const limitedData = data?.articles?.slice(0, 4);
                setHealthData(limitedData);
                
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])

    return(
        <div>
            { healthData ?
                    healthData.map((items) => {
                        <div key={items.source.id} >
                                    <img src={items.urlToImage} alt="" />
                                    <div>
                                        <p>{items.title}</p>
                                        <span className="inline-block mt-2 text-gray-400 text-sm">
                                        { new Date(items.publishedAt). toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                        }) }</span>
                                    </div>
                        </div>
                     })
                : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>}
        </div> 
    )
}

