import {
    GlobalOutlined,
    UserOutlined,
    FileTextOutlined,
  } from '@ant-design/icons';
import type { IData_SnippetNews } from '../../data/data';
  
interface ContentComponent {
    data: IData_SnippetNews;
}

export default function UrlAndText({data}:ContentComponent) {
    return (
        <div className="source-info">
            <GlobalOutlined /> <a href={data.URL}>{data.DOM}</a>
            <span className="country">{data.CNTR}</span>
            <FileTextOutlined  /> {data.CNTR_CODE}
            <UserOutlined /> Emily C., Taormina A., et al.
        </div>   
    )
}