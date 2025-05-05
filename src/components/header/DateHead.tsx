import type { IData_SnippetNews } from "../../data/data";


interface HeaderComp {
    data: IData_SnippetNews;
}

export default function DateHead({data}: HeaderComp) {
    const date = new Date(data.DP);

    const day = date.getDate(); 
    const month = date.toLocaleString("en-US", { month: "short" }); 
    const year = date.getFullYear(); 

    return (
        <span className="date">
            <span className="white">{day}</span>{" "}
            <span className="gray">{month} {year}</span>
        </span>
    );
}
