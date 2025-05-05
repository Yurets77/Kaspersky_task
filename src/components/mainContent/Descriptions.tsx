import type { IData_SnippetNews } from "../../data/data";
import {useState} from "react";
import CounterWords from "./CounterWords";


interface ContentComponent {
    data: IData_SnippetNews;
}

export default function Descriptions({data}:ContentComponent) {

    const fullText = data.HIGHLIGHTS.join(", ");
    const [expanded, setExpanded] = useState(false);
    const limit = 100;
  
    const processText = (text: string): string => {
      return text
        .replace(/<kw>/g, '<span class="keyword">')
        .replace(/<\/kw>/g, '</span>');
    };
    const processedFullText = processText(fullText);
    const isLong = fullText.length > limit;
    const displayText = !expanded && isLong ? processedFullText.slice(0, limit) + "..." : processedFullText;
  
    const keywordCounts = CounterWords(fullText);
    
    const toggleExpanded = (e: React.MouseEvent) => {
      e.preventDefault();
      setExpanded(!expanded);
    };

    return (
        <>
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: displayText }}
        />
        {isLong && (
          <button className="show-more" onClick={toggleExpanded}>
            {expanded ? "Hide" : "Show more"}
          </button>
        )}
                <div className="tags">
          {Object.entries(keywordCounts).map(([key, count]) => {
            if (count === 0) return null;
            return (
              <div className="tag" key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)} <span>{count}</span>
              </div>
            );
          })}
        </div>
      </>
      );
  
}