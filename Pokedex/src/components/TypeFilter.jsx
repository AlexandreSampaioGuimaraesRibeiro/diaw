import { getTypeColor } from "../utils/typeColors";

export default function TypeFilter({ types, selected, onChange }) {
  return (
    <div className="type-filter">
      <button className={!selected ? "chip active" : "chip"} onClick={() => onChange("")}>
        Todos
      </button>
      {types.map((t) => (
        <button
          key={t}
          className={selected === t ? "chip active" : "chip"}
          style={{ "--c": getTypeColor(t) }}
          onClick={() => onChange(selected === t ? "" : t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
