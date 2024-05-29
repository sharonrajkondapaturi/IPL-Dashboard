import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/`

class TeamMatches extends Component {
  state = {latestTeam: [], recentTeam: [], isLoading: true, teamColor: ''}

  componentDidMount() {
    this.teamDetail()
  }

  teamDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fetched = await fetch(`${teamMatchesApiUrl}${id}`)
    const teamfetchedData = await fetched.json()
    const colors = [
      'color2',
      'color3',
      'color4',
      'color5',
      'color6',
      'color7',
      'color8',
      'color9',
      'color10',
      'color11',
    ]
    const randomColor = colors[Math.ceil(Math.random() * colors.length - 1)]
    console.log(randomColor)
    const latestDetails = teamfetchedData.latest_match_details
    const recentDetails = teamfetchedData.recent_matches.map(eachRecent => ({
      recentMatchesUmpires: eachRecent.umpires,
      recentMatchesResults: eachRecent.result,
      recentMatchesManOfTheMatch: eachRecent.man_of_the_match,
      recentMatchesId: eachRecent.id,
      recentMatchesCompetingTeam: eachRecent.competing_team,
      recentMatchesCompetingTeamLogo: eachRecent.competing_team_logo,
      recentMatchesFirstInnings: eachRecent.first_innings,
      recentMatchesSecondInnings: eachRecent.second_innings,
      recentMatchesMatchStatus: eachRecent.match_status,
    }))
    console.log(latestDetails)
    console.log(recentDetails)
    const newTeamDetails = {
      teamBannerUrl: teamfetchedData.team_banner_url,
      umpires: latestDetails.umpires,
      result: latestDetails.result,
      manOfTheMatch: latestDetails.man_of_the_match,
      id: latestDetails.id,
      date: latestDetails.date,
      venue: latestDetails.venue,
      competingTeam: latestDetails.competing_team,
      competingTeamLogo: latestDetails.competing_team_logo,
      firstInnings: latestDetails.first_innings,
      secondInnings: latestDetails.second_innings,
      matchStatus: latestDetails.match_status,
    }
    console.log(newTeamDetails)
    this.setState({
      latestTeam: newTeamDetails,
      recentTeam: recentDetails,
      teamColor: randomColor,
      isLoading: false,
    })
  }

  render() {
    const {latestTeam, recentTeam, teamColor, isLoading} = this.state
    const {teamBannerUrl, id} = latestTeam
    return (
      <div className={teamColor}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team banner" className="team-image" />
            <p className="para">Latest Matches</p>
            <LatestMatch key={latestTeam.id} latest={latestTeam} />
            <ul className="recent-list">
              {recentTeam.map(eachRecent => (
                <MatchCard key={eachRecent.id} recent={eachRecent} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
