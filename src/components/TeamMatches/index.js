import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamBackgroundClasses = {
  RCB: 'rcb-bg',
  KKR: 'kkr-bg',
  KXP: 'kxp-bg',
  CSK: 'csk-bg',
  RR: 'rr-bg',
  MI: 'mi-bg',
  SH: 'srh-bg',
  DC: 'dc-bg',
}

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
    latestMatchesData: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
    }

    const updatedMatchCards = data.recent_matches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      result: each.result,
    }))

    this.setState({
      teamData: data,
      isLoading: false,
      latestMatchesData: updatedLatestMatch,
      recentMatches: updatedMatchCards,
    })
  }

  render() {
    const {teamData, isLoading, latestMatchesData, recentMatches} = this.state
    const {match} = this.props
    const {id} = match.params
    const teamBgClass = teamBackgroundClasses[id] || ''

    return (
      <div className={`team-detailed-view ${teamBgClass}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamData.team_banner_url}
              alt="team banner"
              className="team-banner"
            />

            <p className="latest-heading">Latest Matches</p>
            <LatestMatch matchDetails={latestMatchesData} />
            <ul className="recent-matches">
              {recentMatches.map(each => (
                <li key={each.id} className="match-card-item">
                  <MatchCard recentMatches={each} />
                </li>
              ))}
            </ul>
            <Link to="/" className="back-btn">
              <button type="button" className="btn">
                Back
              </button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
