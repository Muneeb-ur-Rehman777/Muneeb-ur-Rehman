export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-20">

      <p
        className="uppercase tracking-[0.35em]
        text-cyan-400
        font-semibold"
      >
        {subtitle}
      </p>

      <h2
        className="text-5xl font-bold mt-4"
      >
        {title}
      </h2>

    </div>
  );
}