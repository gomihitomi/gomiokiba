const datas = [
  {
    tip: "まぁまぁ誤字されています。",
    label: "名前",
    content: "吾味人美",
  },
  {
    tip: "芹沢●さひさんと完全に一緒です。",
    label: "身長/体重",
    content: "153cm/47kg",
  },
  {
    tip: "5年毎に更新されます。",
    label: "年齢",
    content: "20代後半",
  },
  {
    tip: "他人のエクセルを壊す仕事です。",
    label: "職業",
    content: "デスクワーク",
  },
  {
    tip: "常に移り変わるみたいな意味です。",
    label: "座右の銘",
    content: "星の流れ、月の位置",
  },
  {
    tip: "これのおかげで生きています。",
    label: "好き",
    content: "お酒（ウイスキー）",
  },
];

export default function Profiles() {
  return (
    <div className="profile-container f-box">
      {datas.map(({ tip, label, content }) => (
        <div key={label} className="profile-group">
          <span className="tip bottom">{tip}</span>
          <div className="profile-box">
            <div className="profile-label">{label}</div>
            <div className="profile-content">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
