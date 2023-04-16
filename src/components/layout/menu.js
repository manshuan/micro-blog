import React from "react";

const menuItems = {
    1: "Trending News",
    2: "Software News",
    3: "Hardware News",
    4: "Gaming News"
}

const Menu = () => {

    return(
        <div className="flex justify-center">
            {
                [1,2,3,4].map(item => (
                    <div className="mw-45 pt-1 pb-1 pl-4 pr-4 font-semibold text-lg bg-white ml-2 rounded-lg text-slate-700 border hover:border hover:border-slate-400 active:text-slate-800">
                        {menuItems[item]}
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;