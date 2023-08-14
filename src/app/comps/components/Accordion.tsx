"use client";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface Item {
    id : string;
    label : string;
    content: string;
}

interface Props {
    Items : Item[]
}

const Accordion = ( {Items} : Props) => {
    const [expandedIndex, setExpendIndex] = useState(-1);

    const handleClick = (idx : number) => {
        // solution
        // console.log("STALE version of expandedIndex", expandedIndex);
        // setExpendIndex((currentExpandIndex) => {
        //     console.log("UP TO DATE version", currentExpandIndex);
        //     if (currentExpandIndex === idx) {
        //         return -1
        //     } else {
        //         return idx;
        //     }
        // });
        setExpendIndex(prev => (prev === idx) ? -1 : idx);
        
        // -- it's going to have a bug;
        // console.log(expandedIndex);
        // idx = (idx === expandedIndex) ? -1 : idx;
        // setExpendIndex(idx);
    };

    const renderItems = Items.map((item, index) => {
        // if (index === expandedIndex) {
        //     console.log("expanded");
        // } else {
        //     console.log("collapsed");
        // } 
        const isExpanded = index === expandedIndex;
        // console.log(isExpanded);

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5 text-blue-600">{item.content}</div>}
            </div>
        );
    })

    return<div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accordion;