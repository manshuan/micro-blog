import React from "react";
import Header from "./header";
import Aside from "./aside";

export default function Layout(props) {
    return (
        <div className="bg-gray-100">
            <Header />
            <body className="flex justify-between h-auto mt-20 min-h-screen">
                <section name="main" className="basis-9/12 p-2 mt-4">
                    {props.children}
                </section>
                <section name="aside" className="basis-1/4 p-2 mt-4 mr-3">
                    <Aside/>
                </section>
            </body>
        </div>
    )
}