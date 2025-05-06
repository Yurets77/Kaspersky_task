import {BorderOutlined} from "@ant-design/icons";

export default function DuplicateHeader() {
    return (
        <div className="header">
          <span className="date">
            <span className="grey">18 Jun 2024</span>
          </span>
          <span className="reach">
            <span className="white">211K Reach</span>
          </span>
          <div className="status">
            <span className="icon">
                <BorderOutlined className="border-outlined"/>
                <span className="icon-letter">i</span>
            </span>
            <span className="icon">
                <BorderOutlined className="border-outlined"/>
            </span>
          </div>
        </div>
    )
}