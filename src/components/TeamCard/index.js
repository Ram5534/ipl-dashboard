import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {name, id, teamImageUrl} = teams
  return (
    <li className="teams">
      <Link to={`/team-matches/${id}`} className="team-list">
        <img src={teamImageUrl} alt={`${name}`} className="team-image" />
        <p className="teams-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
