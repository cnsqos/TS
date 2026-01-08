export default function InningInfo({
  inning,
  target,
}: {
  inning: number;
  target: number;
}) {
  return (
    <div>
      <p>Inning: {inning}</p>
      <p>Target: {target}</p>
    </div>
  );
}