import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {name, id, teamImageUrl} = teams

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
