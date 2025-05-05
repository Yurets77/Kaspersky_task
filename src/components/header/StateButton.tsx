import type { IData_SnippetNews } from "../../data/data";

interface HeaderComp {
    data: IData_SnippetNews;
}

export default function StatusButton({data}: HeaderComp) {
    const isPositive = data.SENT === "positive";

    return (
        <span className={isPositive ? "positive" : "negative"}>
            {isPositive ? "Positive" : "Negative"}
        </span>
    );
}
