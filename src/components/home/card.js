import React from "react";

const ArticleCard = () => {
    return (
        <div className="container border-spacing-1 bg-white w-80 rounded-md m-3 shadow-sm hover:shadow">
            <div className="rounded-md">
                <img
                    src="https://fabgirls4u.com/wp-content/uploads/2023/03/priscilla-du-preez-dlxLGIy-2VU-unsplash-1-835x470.jpg"
                    alt="Girl in a jacket"
                    height="100%"
                    className="hover:opacity-70"
                />
            </div>
            <div className="p-2">
                <div>
                    <span className="text-sm text-slate-500">By </span>
                    <span className="text-sm text-slate-500">Anshuman Shukla</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="text-sm text-slate-500">On </span>
                    <span className="text-sm text-slate-500">Sun 16 Apr</span>
                </div>
                <div className="font-bold text-lg mt-4 text-blue-950 mb-2">
                    Some renadom title - of my article which is rubbish.
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;