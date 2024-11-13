const datas = [
  "吾味人美",
  "バーチャルインターネットラクガキマン",
  "バーチャルインターネットラクガキマン外伝",
  "人美ちゃん日記",
  "マシュマロ食べろ吾味人美",
  "今日の吾味人美",
  "朝刊吾味人美",
  "吾味人美専用スレにありがちなこと",
  "飲め吾味人美",
  "吾味人美夢日記",
  "吾味メモ",
  "急に歌うな吾味人美",
  "急に踊るな吾味人美",
  "痩せろ吾味人美",
];

export default function HashTags() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {datas.map((href) => (
        <a
          key={href}
          href={`https://x.com/hashtag/${href}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          #{href}
        </a>
      ))}
    </div>
  );
}
