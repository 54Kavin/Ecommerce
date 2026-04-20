export default function StarRating({ rating }) {
  return (
    <span style={{ color:"#f59e0b", fontSize:13 }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color:"#94a3b8", fontSize:12, marginLeft:4, fontFamily:"sans-serif" }}>
        {rating}
      </span>
    </span>
  );
}