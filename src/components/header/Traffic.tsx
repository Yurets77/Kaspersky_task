import type { IData_TrafficItem } from "../../data/data";


interface TrafficHeader {
    data: IData_TrafficItem[]
}

export default function Traffic({data}: TrafficHeader) {
return (
    <span className="traffic gray">
    Top Traffic:
    {data.map((item, i) => (
        <span key={i} className="gray margin-left">
            {" "}{item.value}
            <span className="white margin-left">
                {Math.round(item.count * 100) + "%"}
            </span>
        </span>
    ))}
</span>
)
}