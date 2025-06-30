import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentMatches

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="res">{result}</p>
      <p className={matchStatus === 'Won' ? 'won-status' : 'lose-status'}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
