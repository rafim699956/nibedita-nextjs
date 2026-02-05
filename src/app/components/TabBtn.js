"use client";

import { useState } from "react";

const TabBtn = ({ label, children }) => {
    const [tab, setTab] = useState("Mission & Vision");
    return (
        <button
            onClick={() => setTab(label)}
            className={`${tab === label ? "border-l-[#9D5DA3] bg-[#F6EFF8]"
                : "border-l-[#F6EFF8]"} border-l-2 py-5 px-8 font-medium text-xl leading-6 text-nowrap text-left cursor-pointer`}
        >
            {children}
        </button>
    );
};

export default TabBtn;
