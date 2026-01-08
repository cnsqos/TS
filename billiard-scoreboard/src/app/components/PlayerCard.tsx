import { Player } from '../types/game';

export default function PlayerCard({
  player,
  active,
}: {
  player: Player;
  active: boolean;
}) {
  return (
    <div style={{ border: active ? '3px solid red' : '1px solid gray' }}>
      <h3>{player.name}</h3>
      <p>{player.score}</p>
    </div>
  );
}