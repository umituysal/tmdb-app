import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { months } from '../common/Months';

function Movies({ movies }) {

    return (
        <div className='container mx-auto px-4 '>
            <h1 className='text-center mt-10 text-3xl font-bold'>Gösterimdeki Filmler</h1>
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
                {movies?.map((item) => (
                    item?.backdrop_path && (
                        <div key={item?.id} className="flex justify-center h-full shadow-xl rounded-xl">
                            <div className="rounded-lg relative">
                                <a href={`/movie/${item?.id}`}>
                                    <img
                                        className="w-full object-cover"
                                        src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                                        alt=""
                                    />
                                </a>
                                <div className="p-6 text-center rounded-lg bg-white h-32">
                                    <h5 className=" text-sm text-black font-medium mb-2 ">
                                        {item?.title}
                                    </h5>
                                    <p className=" text-sm mb-4">
                                        <span className="mr-1">{months[new Date(item?.release_date).getMonth()]}</span>
                                        <span className="mr-1">{new Date(item?.release_date).getDate()},</span>
                                        {new Date(item?.release_date).getFullYear()}</p>
                                    <div className="rounded-full bg-dark-blue !text-white flex justify-center items-center w-10 h-10 absolute bottom-28 left-4">
                                        <CircularProgressbar
                                            value={Number(item?.vote_average) * 10}
                                            text={`${(Number(item?.vote_average) * 10).toFixed(0, 2)}`}
                                            styles={buildStyles({
                                                strokeLinecap: 'butt',
                                                textSize: '26px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba( ${Number(item?.vote_average) * 10 < 75 ? '210, 213, 49' : '33, 208, 122'}, ${Number(item?.vote_average) * 10})`,
                                                textColor: '#fff',
                                                trailColor: '#423D0F',
                                                backgroundColor: 'bg-dark-blue',
                                            })}
                                        />
                                        <span className="absolute text-white top-3 right-1.5 text-[8px]">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    )
}

export default Movies