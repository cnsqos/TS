export default function InningInfo({
  inning,
  target,
}: {
  inning: number;
  target: number;
}) {
  return (
    <div className="inning-info">
      <p>Inning: {inning}</p>
      <p>Target: {target}</p>
    </div>
  );
}