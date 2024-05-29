import './index.css'

const LatestMatch = props => {
  const {latest} = props
  console.log(latest)
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
  } = latest
  return (
    <div className="detail">
      <div>
        <p className="head">{competingTeam}</p>
        <p className="match-de">{date}</p>
        <p className="match-de">{venue}</p>
        <p className="match-de">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-lo"
      />
      <div>
        <p className="sub-head">First Innings</p>
        <p className="sub-detail">{firstInnings}</p>
        <p className="sub-head">Second Innings</p>
        <p className="sub-detail">{secondInnings}</p>
        <p className="sub-head">Man Of The Match</p>
        <p className="sub-detail">{manOfTheMatch}</p>
        <p className="sub-head">Umpires</p>
        <p className="sub-detail">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
