export default function CounterWords(text: string): Record<string, number> {
  const keywords = ["kaspersky", "new", "antivirus"];
  const counts: Record<string, number> = {
    kaspersky: 0,
    new: 0,
    antivirus: 0,
  };

  const regex = /<kw>(.*?)<\/kw>/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const word = match[1].toLowerCase();
    if (keywords.includes(word)) {
      counts[word] += 1;
    }
  }

  return counts;
}