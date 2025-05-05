import type { IData_SnippetNews } from "../../data/data";


interface HeaderComp {
    data: IData_SnippetNews;
}

export default function ReachHead({data}: HeaderComp) {

    return (
        <span className="reach">
            <span className="white">{data.REACH}</span>{" "}
            <span className="gray">Reach</span>
        </span>
    );
}
