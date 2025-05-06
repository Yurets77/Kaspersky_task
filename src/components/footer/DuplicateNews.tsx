import {Card} from "antd";

import DuplicateHeader from "./DuplicateHeader";
import DuplicateDescription from "./DuplicateDescription";

export default function DuplicateNews() {
    return (
        <Card className="duplicate-card" size="small">
        <DuplicateHeader/>
        <DuplicateDescription/>
        </Card>
    )
}