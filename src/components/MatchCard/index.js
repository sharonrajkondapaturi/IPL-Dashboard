import './index.css'

const MatchCard = props => {
  const {recent} = props
  const {
    recentMatchesCompetingTeamLogo,
    recentMatchesCompetingTeam,
    recentMatchesResults,
    recentMatchesMatchStatus,
  } = recent
  const lostOrWon = recentMatchesMatchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="recent-background">
      <img
        src={recentMatchesCompetingTeamLogo}
        alt={`competing team ${recentMatchesCompetingTeam}`}
        className="recent-team"
      />
      <p className="recent-detail1">{recentMatchesCompetingTeam}</p>
      <p className="recent-detail">{recentMatchesResults}</p>
      <p className={lostOrWon}>{recentMatchesMatchStatus}</p>
    </li>
  )
}
export default MatchCard
