import type { IData_SnippetNews } from "../../data/data";
import Descriptions from "./Descriptions.tsx";
import OriginalSource from "./OriginalSource.tsx";
import Text from "./Text.tsx";
import UrlAndText from "./UrlAndText.tsx";
import DuplRelev from "./DuplRelev.tsx";


interface ContentComponent {
    data: IData_SnippetNews;
}

export default function Content({data}:ContentComponent) {
    return (
        <>
        <Text data={data}/>
        <UrlAndText data={data}/>
        <Descriptions data={data}/>
        <OriginalSource/>
        <DuplRelev/>
        </>
    )
}