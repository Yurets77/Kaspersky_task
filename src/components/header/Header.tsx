import type { IData_SnippetNews } from "../../data/data";
import StatusButton from "./StateButton.tsx";
import Squares from "./Squares.tsx";
import DateHead from "./DateHead.tsx";
import ReachHead from "./ReachHead.tsx";
import Traffic from "./Traffic.tsx";



interface HeaderComponent {
    data: IData_SnippetNews;
}

export default function Header({data}:HeaderComponent) {
    return (
        <div className="header">
            <DateHead data={data}/>
            <ReachHead data={data}/>
            <Traffic data={data.TRAFFIC}/>

            <div className="status">
                <StatusButton data={data}/>
                <Squares />
            </div>
        </div>
    )
}