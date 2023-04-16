import React from "react";
import Menu from "./menu";

const Header = () => {
    return(
        <header className="bg-gray-100 fixed h-20 right-0 left-0 top-0 p-2 pt-4 flex flex-auto justify-start align-top z-50">
            <div>
                <img src="/logo-no-background.png" alt="image" width="90" height="100%"/>
            </div>
            <div className="ml-48">
                <Menu/>
            </div>
            {/* <div className="">
                <button className="pt-2 pb-2 pl-5 pr-5 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-950 active:bg-blue-800">
                    Login
                </button>
            </div> */}
        </header>
    )
}

export default Header;