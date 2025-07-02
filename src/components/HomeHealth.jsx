import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeHealth = () => {
  return (
    <div className="mt-20">
        {/* Home Section Health header  */}
        <div className="flex items-center gap-x-2 justify-center
        lg:justify-start lg:w-[82%] lg:mx-auto">
            <div className="w-[2px] h-[1rem] bg-red-700"></div>
            <div className="flex items-center gap-x-2 lg:w-[90%]">
                <span className="text-base text-zinc-800 font-semibold">Health</span>
                <span className="h-[1px] w-[11rem] bg-zinc-700 inline-block
                lg:w-[100%]"></span>
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




// component used to fetch data into the props
export const HomeHealthData = () => {
    const [healthData, setHealthData] = useState();
    console.log(healthData)
    // console.log(healthData)
    

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
            <div className="lg:flex lg:w-[85%] lg:mx-auto">
                <HomeHealthCont 
            img={healthData[0].urlToImage}
            cat="HEAlth"
            title={healthData[0].title}
            date={new Date(healthData[0].publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
            />
            <HomeHealthCont 
            img={healthData[1].urlToImage}
            cat="HEAlth"
            title={healthData[1].title}
            date={new Date(healthData[1].publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
            />
            <HomeHealthCont 
            img={healthData[2].urlToImage}
            cat="HEAlth"
            title={healthData[2].title}
            date={new Date(healthData[2].publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
            />
            <HomeHealthCont 
            img={healthData[3].urlToImage}
            cat="HEAlth"
            title={healthData[3].title}
            date={new Date(healthData[3].publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
            />
            </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>}
        </div> 
    )
}



// component for content structure using props
export const HomeHealthCont = ({img, cat, title, date}) => {
    return(
        <div className="p-[1.5rem] lg:w-[33%]">
            <img src={img} alt="img" className="w-full lg:h-[15rem] object-cover" />
            <div className="mt-5">
                <Link to={{pathname:"/health"}}><span className="text-red-400 text-sm font-semibold uppercase">{cat}</span></Link>
                <p className="mt-2 text-sm font-semibold text-zinc-900s">{title}</p>
                <p className="mt-2 text-sm text-gray-500">{date}</p>
            </div>
        </div>
    )
}