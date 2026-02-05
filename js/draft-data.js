// Madden Draft Guide Data
// This file is generated from the bot's data files
// Last updated: 2026-02-05

const DRAFT_DATA = {
  currentLeagueId: 1,

  leagues: [
    {
      id: 1,
      name: "Many Worlds League",
      current_season: 1,
      created_at: "2026-02-05T00:00:00"
    }
  ],

  players: [
    {
      id: 1,
      name: "Mason Williams",
      position: "QB",
      college: "Arizona State",
      age: 21,
      development: "Star",
      dev_revealed: false,
      archetype: "Field General",
      throw_hand: "Right",
      league_id: 1,
      season: 1,
      madden_rank: 1,
      potential_rank: 1,
      scouting_report: "A true field general who orchestrates the offense with surgical precision. Williams brings elite pocket presence and the football IQ of a 10-year veteran. His ability to read defenses pre-snap and make adjustments sets him apart from his peers.",
      strengths: ["Elite field vision", "Strong arm talent", "Pocket awareness", "Leadership qualities"],
      weaknesses: ["Limited mobility", "Needs better footwork"],
      image_url: null,
      drafted_team: null,
      draft_round: null,
      draft_pick: null
    },
    {
      id: 2,
      name: "Jaelon Holt",
      position: "QB",
      college: "Texas",
      age: 22,
      development: "Star",
      dev_revealed: false,
      archetype: "Improviser",
      throw_hand: "Right",
      league_id: 1,
      season: 1,
      madden_rank: 2,
      potential_rank: 2,
      scouting_report: "Dual-threat quarterback with exceptional athleticism. Holt brings a dynamic element to the position with his ability to extend plays and create outside the pocket while still delivering accurate passes downfield.",
      strengths: ["Excellent mobility", "Strong arm", "Playmaking ability", "Big-game performer"],
      weaknesses: ["Accuracy inconsistent", "Decision-making under pressure"],
      image_url: null,
      drafted_team: null,
      draft_round: null,
      draft_pick: null
    },
    {
      id: 3,
      name: "Brian Sims",
      position: "QB",
      college: "Michigan",
      age: 23,
      development: "Star",
      dev_revealed: false,
      archetype: "Strong Arm",
      throw_hand: "Right",
      league_id: 1,
      season: 1,
      madden_rank: 3,
      potential_rank: 3,
      scouting_report: "Pro-ready quarterback with a cannon arm. Sims thrived in Michigan's pro-style offense and has the arm talent to make every throw in the NFL. His ability to drive the ball into tight windows is exceptional.",
      strengths: ["Strongest arm in class", "Deep ball accuracy", "Pro-style experience", "Clutch performer"],
      weaknesses: ["Sometimes forces throws", "Average mobility"],
      image_url: null,
      drafted_team: null,
      draft_round: null,
      draft_pick: null
    },
    {
      id: 4,
      name: "Khalil White",
      position: "QB",
      college: "Colorado",
      age: 22,
      development: "Star",
      dev_revealed: false,
      archetype: "Scrambler",
      throw_hand: "Right",
      league_id: 1,
      season: 1,
      madden_rank: 4,
      potential_rank: 4,
      scouting_report: "Dynamic playmaker with elite rushing ability. White is the most mobile quarterback in this class and can single-handedly change games with his legs. His arm talent continues to improve.",
      strengths: ["Elite speed", "Rushing ability", "Creates big plays", "Elusiveness"],
      weaknesses: ["Inconsistent accuracy", "Needs to improve pocket patience"],
      image_url: null,
      drafted_team: null,
      draft_round: null,
      draft_pick: null
    },
    {
      id: 5,
      name: "Donnie Brown",
      position: "QB",
      college: "BYU",
      age: 24,
      development: "Star",
      dev_revealed: false,
      archetype: "Field General",
      throw_hand: "Right",
      league_id: 1,
      season: 1,
      madden_rank: 5,
      potential_rank: 5,
      scouting_report: "Mature, experienced signal caller who's seen it all. Brown brings veteran leadership and exceptional pre-snap reads. His football IQ is off the charts.",
      strengths: ["High football IQ", "Leadership", "Accuracy", "Pocket presence"],
      weaknesses: ["Limited athleticism", "Older prospect"],
      image_url: null,
      drafted_team: null,
      draft_round: null,
      draft_pick: null
    }
  ],

  predictions: []
};

// Helper functions for data access
function getCurrentLeague() {
  return DRAFT_DATA.leagues.find(l => l.id === DRAFT_DATA.currentLeagueId);
}

function getPlayersByPosition(position) {
  const league = getCurrentLeague();
  return DRAFT_DATA.players
    .filter(p => p.position === position && p.league_id === league.id && p.season === league.current_season)
    .sort((a, b) => a.madden_rank - b.madden_rank);
}

function getTopProspects(count = 3) {
  const league = getCurrentLeague();
  return DRAFT_DATA.players
    .filter(p => p.league_id === league.id && p.season === league.current_season)
    .sort((a, b) => a.madden_rank - b.madden_rank)
    .slice(0, count);
}

function getPlayerById(id) {
  return DRAFT_DATA.players.find(p => p.id === parseInt(id));
}

function getAllPlayers() {
  const league = getCurrentLeague();
  return DRAFT_DATA.players
    .filter(p => p.league_id === league.id && p.season === league.current_season)
    .sort((a, b) => a.madden_rank - b.madden_rank);
}

function getPredictionsForPlayer(playerId) {
  return DRAFT_DATA.predictions.filter(p => p.player_id === parseInt(playerId));
}

// Position display names
const POSITION_NAMES = {
  'QB': 'Quarterback',
  'HB': 'Halfback',
  'WR': 'Wide Receiver',
  'TE': 'Tight End',
  'OL': 'Offensive Line',
  'LT': 'Left Tackle',
  'LG': 'Left Guard',
  'C': 'Center',
  'RG': 'Right Guard',
  'RT': 'Right Tackle',
  'DL': 'Defensive Line',
  'DE': 'Defensive End',
  'DT': 'Defensive Tackle',
  'LB': 'Linebacker',
  'OLB': 'Outside Linebacker',
  'MLB': 'Middle Linebacker',
  'CB': 'Cornerback',
  'S': 'Safety',
  'FS': 'Free Safety',
  'SS': 'Strong Safety',
  'K': 'Kicker',
  'P': 'Punter'
};

// NFL Teams for predictions
const NFL_TEAMS = [
  "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills",
  "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
  "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
  "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs",
  "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins",
  "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
  "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
  "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders"
];
