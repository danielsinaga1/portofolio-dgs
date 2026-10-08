export default function SectionHeading({ number, eyebrow, title, description }: {
  number: string; eyebrow: string; title: string; description?: string;
}) {
  return <div className="section-heading">
    <div><span className="section-eyebrow"><span>{number}</span>{eyebrow}</span><h2>{title}</h2></div>
    {description && <p>{description}</p>}
  </div>;
}
