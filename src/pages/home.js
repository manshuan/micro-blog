import React from "react";
import ArticleCard from "../components/home/card";

const Home = () => {
    return (
        <>
            <div className="p-2 rounded ml-4 flex flex-wrap justify-between items-center">
                <p className="text-2xl font-bold">
                    Latest Articles
                </p>
                <input
                    type="text"
                    className="bg-white p-2 pl-3 border border-slate-300 rounded-md"
                    placeholder="Search Articles..."
                >
                </input>
            </div>
            <div className="flex justify-around flex-wrap">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                        <ArticleCard />
                    ))
                }
            </div>
        </>
    )
}

export default Home;