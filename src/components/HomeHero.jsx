import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const HomeHero = () => {


  return (
    <div className="lg:flex lg:p-10 lg:w-[90%] lg:mx-auto lg:items-start">
        <div className="mt-10 lg:mt-0 lg:w-[55%]"><Link to={{pathname: "/sports"}}><HomeHeroSports/></Link></div>
        <div className="lg:w-[40%]">
            <div><Link to={{pathname: "/politics"}}><HomeHeroPolitics/></Link></div>
            <div><Link to={{pathname: "/health"}}><HomeHeroHealth/></Link></div>
        </div>
    </div>
  )
}

export default HomeHero





// { DATA FOR HOME HERO SPORTS }
export const HomeHeroSports = () => {
    const [sportsData, setSportsData] = useState();
    // const randomNews = Math.floor(Math.random() * sportsData?.articles?.length )
    const bgImg = sportsData?.articles[0]?.urlToImage;
    console.log(sportsData)
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setSportsData(data)
                
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])

    return(
        sportsData?.articles ? <div className="p-[1rem]">
                <div style={{ backgroundImage: `url(${bgImg})`}}
                className="h-[20rem] w-full bg-center bg-no-repeat bg-size-[180%]
                lg:h-[35rem] lg:bg-size-[200%]">
                    <div className="bg-[rgb(0,0,0,0.4)] w-full h-full p-[1rem]
                    lg:flex lg:flex-col lg:justify-end lg:px-5">
                        <span className="bg-red-700 text-white py-1 px-3 text-sm font-semibold inline-block mt-30
                        lg:w-[16%]">SPORTS</span>
                        <p className="text-white text-base font-semibold mt-2
                        lg:text-2xl">
                            { sportsData?.articles[0]?.title }
                        </p>
                        <span className="inline-block mt-2 text-gray-400 text-sm">
                            { new Date(sportsData?.articles[0]?.publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }) }</span>
                    </div>
                </div>
        </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
    )
}


// { DATA FOR HOME HERO POLITICS }
export const HomeHeroPolitics = () => {
    const [politicsData, setPoliticsData] = useState();
    console.log(politicsData)
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/top-headlines?category=politics&country=us&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setPoliticsData(data)
                
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])

    return(
        politicsData?.articles ? <div>
                <div key={politicsData?.articles?.id}
                className="h-auto w-full flex gap-x-2.5 items-center p-[1rem]
                lg:gap-x-5">
                        <img className="w-[10rem] h-[15rem] object-cover
                        lg:w-[13rem] lg:h-[18rem]"
                        src={politicsData?.articles[0]?.urlToImage} alt="img" />
                        <div>
                            <span className="bg-red-700 text-white py-1 px-3 text-sm font-semibold">POLITICS</span>
                            <p className="mt-2 text-base font-semibold text-zinc-800
                            lg:text-xl">
                                { politicsData?.articles[0]?.title }
                            </p>
                            <span className="inline-block mt-2 text-gray-400 text-sm">
                            { new Date(politicsData?.articles[0]?.publishedAt). toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                            }) }</span>
                        </div>
                </div>
        </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
    )
} 



// { DATA FOR HOME HERO HEALTH }
export const HomeHeroHealth = () => {
    const [healthData, setHealthData] = useState();
    console.log(healthData)
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setHealthData(data)
                
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])

    return(
        healthData?.articles ? <div>
                    <div key={healthData?.articles?.id}
                    className="h-auto w-full flex gap-x-2.5 items-center p-[1rem]
                    lg:gap-x-5">
                        <img className="w-[10rem] h-[15rem] object-cover
                        lg:w-[13rem] lg:h-[18rem]r"
                        src={healthData?.articles[0]?.urlToImage} alt="img" />
                        <div>
                                <span className="bg-red-700 text-white py-1 px-3 text-sm font-semibold">HEALTH</span>
                                <p className="mt-2 text-base font-semibold text-zinc-800
                                lg:text-xl">
                                    { healthData?.articles[0]?.title }
                                </p>
                                <span className="inline-block mt-2 text-gray-400 text-sm">
                                { new Date(healthData?.articles[0]?.publishedAt). toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                                }) }</span>
                        </div>
                    </div>
        </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
    )
}
