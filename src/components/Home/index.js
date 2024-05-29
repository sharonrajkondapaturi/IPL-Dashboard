import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl'
    const team = await fetch(teamMatchesApiUrl)
    const teamData = await team.json()
    const newTeamList = teamData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamList: newTeamList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="background">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height="50" />
          </div>
        ) : (
          <div>
            <div className="ipl-dashboard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="team-list">
              {teamList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teams={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
