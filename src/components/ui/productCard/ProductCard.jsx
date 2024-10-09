import { CardButton } from "../";

export default function ProductCard({ title, image, path, label }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <CardButton path={path}>{label}</CardButton>
    </div>
  );
}
