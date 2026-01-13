import { Player } from '../types/game';

export default function PlayerCard({
  player,
  active,
}: {
  player: Player;
  active: boolean;
}) {
  return (
    <div className={`player-card ${active ? 'active' : ''}`}>
      <h3>{player.name}</h3>
      <p>{player.score}</p>
    </div>
  );
}