import React from "react";

const Aside = () => {
    return (
        <>
            <div className="p-3 bg-white rounded-lg shadow-sm">
                <p className="text-left font-bold text-xl mb-4">
                    Top Trending Articles
                </p>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        How to find a lost iPhone using bluetooth.
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Best Microprocessor chip for a Windows Laptop with Core i3.
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Some Other random Article which Makes No Sense at All.
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Some Other random Article which Makes No Sense at All
                    </a>
                </div>
            </div>
            <div className="p-3 bg-white rounded-lg mt-4 shadow-sm">
                <p className="text-left font-bold text-xl mb-4">
                    Top Trending Categories
                </p>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Hardware
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Gaming
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Sofwares
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Tech News
                    </a>
                </div>
            </div>
            <div className="p-3 bg-white rounded-lg mt-4 shadow-sm">
                <p className="text-left font-bold text-xl mb-4">
                    Filter By Months
                </p>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Jan - 2023
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Feb - 2023
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Mar - 2023
                    </a>
                </div>
                <div className="bg-slate-50 p-1 rounded text-blue-800 mt-2 mb-2 hover:bg-slate-100">
                    <a href="#">
                        Apr - 2023
                    </a>
                </div>
            </div>
        </>
    )
}

export default Aside;