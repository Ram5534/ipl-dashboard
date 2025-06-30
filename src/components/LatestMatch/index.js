import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match-list">
      <div>
        <p className="competingTeam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeam-logo"
        />
      </div>
      <div className="details-container">
        <p className="firstInnings-heading">First Innings</p>
        <p className="firstInnings">{firstInnings}</p>
        <p className="firstInnings-heading">Second Innings</p>
        <p className="firstInnings">{secondInnings}</p>
        <p className="firstInnings-heading">Man Of The Match</p>
        <p className="firstInnings">{manOfTheMatch}</p>
        <p className="firstInnings">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
