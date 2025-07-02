import React, { useEffect, useState } from 'react'
import NewsLetter from './NewsLetter'

const HomeTopStories = () => {
  return (
    <div className='mt-20'>
        {/* Top stories Header */}
        <div className='w-full flex items-center px-[1.5rem] gap-x-1'>
            <div className='w-[50%] flex items-center gap-2'>
                <span className='inline-block bg-red-700 h-[1rem] w-[3px]'></span>
                <p className='text-base font-semibold text-zinc-900'>Top Stories</p>
            </div>
            <span className='inline-block h-[2px] w-[100%] bg-gray-400'></span>
        </div>

        <div><ScienceTopStory/></div>
        <div><NewsLetter/></div>
        <div><WorldTopStory/></div>
        <div><ArtsTopStory/></div>
    </div>
  )
}

export default HomeTopStories



// FETCHING DATA FOR HOME SCIENCE TOP STORY 
export const ScienceTopStory = () => {
    const [topStory, setTopStory] = useState();
    const bgImg = topStory?.articles[0]?.urlToImage;
    console.log(topStory);
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/top-headlines?category=science&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setTopStory(data)
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])
    return(
        <div className='px-[1.5rem] py-[1rem] mt-10'>
            { topStory ?
                <div style={{backgroundImage: `url(${bgImg})`}}
                className='h-[20rem] w-full bg-center bg-size-[180%] bg-no-repeat'>
                        <div className='bg-[rgb(0,0,0,0.5)] w-full h-full text-white pt-35 px-[1rem]'>
                            <span className='text-base uppercase font-semibold'>science</span>
                            <p className='mt-3 text-lg font-semibold'>{topStory?.articles[0]?.title}</p>
                            <p className='text-gray-300 text-sm mt-3'>
                                {new Date(topStory?.articles[0]?.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                                })}
                            </p>
                        </div>
                </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
            }
        </div>
    )
}



// FETCHING DATA FOR HOME WORLD TOP STORY
export const WorldTopStory = () => {
    const [topStory, setTopStory] = useState();
    console.log(topStory);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/everything?q=world&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setTopStory(data)
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])
    return(
        <div className='p-[1.5rem]'>
            { topStory ?
                <div>
                    <img src={topStory?.articles[0]?.urlToImage} alt=""  className='w-full'/>
                    <div className='mt-3'>
                        <span className='text-red-400 uppercase text-sm font-semibold'>World</span>
                        <p className='text-xl font-semibold mt-3 text-zinc-900'>{topStory?.articles[0]?.title}</p>
                        <p className='mt-3 text-gray-500 text-sm'>{new Date(topStory?.articles[0]?.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                                })}</p>
                    </div>
                </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
            }
        </div>
    )
}






// FETCHING DATA FOR ARTS TOP STORY 
export const ArtsTopStory = () => {
    const [topStory, setTopStory] = useState();
    console.log(topStory);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://newsapi.org/v2/everything?q=arts&apiKey=e97e94e98eff4973a401c2174efe2f5e");
                const data = await res.json();
                setTopStory(data)
            } catch (error) {
                console.error("Error Fetching data", error)
            }
        }
        getData();
    }, [])
    return(
        <div className='p-[1.5rem]'>
            { topStory ? 
                <div>
                    <img src={topStory?.articles[0]?.urlToImage} alt=""  className='w-full'/>
                    <div className='mt-3'>
                        <span className='text-red-400 uppercase text-sm font-semibold'>arts</span>
                        <p className='text-xl font-semibold mt-3 text-zinc-900'>{topStory?.articles[0]?.title}</p>
                        <p className='mt-3 text-gray-500 text-sm'>{new Date(topStory?.articles[0]?.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                                })}</p>
                    </div>
                </div> : <div className="w-[100] h-[15rem] m-[1rem] bg-gray-200 text-xl text-white flex items-center justify-center"> </div>
            }
        </div>
    )
}
