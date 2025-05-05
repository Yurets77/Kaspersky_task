import type { IData_SnippetNews } from "../../data/data";

interface ContentComponent {
    data: IData_SnippetNews;
}

export default function Text({data}:ContentComponent) {
    return(
        <h3 className="title">{data.TI}</h3>

    )
}