import { getTypeColor } from "../utils/typeColors";

export default function TypeBadges({ types }) {
  const list = types.length ? types.map((t) => t.name) : ["Typeless"];
  return (
    <div className="badges">
      {list.map((name) => (
        <span key={name} className="badge" style={{ background: getTypeColor(name) }}>
          {name}
        </span>
      ))}
    </div>
  );
}
