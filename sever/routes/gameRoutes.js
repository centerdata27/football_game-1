import express from 'express'
const router = express.Router()

//Mock Data for request
let gameState = {
    score: {HOME: 0, AWAY: 0},
    possession: "HOME",
    quarter: 1,
    status: "IN_PROGRESS",
    yardline: 25,
    homeTeamName:"Home Ravens",
    awayTeamName: "Away Dabears"
};

// GET -> Retun Mock GameState
router.get("/", (req, res) => {

    res.json(gameState);
});

//Patch /api/game/score {team, delta}
router.patch("/score", (req, res) => {
    const {team, delta} = req.body || {};
    if (team !== "HOME" && team  !== "AWAY")
        return res.status(404).json({error: "Invalid team"});
    gameState.score[team] += Number(delta) || 0 ;
    return res.json(gameState)
})

//patch/api/game/possession
router.patch("/possession", (req, res) =>{
    const {team} = req.body || {};
    if (team !== "HOME" && team !== "AWAY")
        return res.status(400).json({error:"Invalid team"});
    gameState.possession = team;
    return res.json(gameState)
})

//patch/api/game/yardline
router.patch("/yardline", (req, res)=>{
    const{delta} = req.body || {};
    const step = Number(delta) || 0;
    gameState.yardline = Math.min(100, Math.max(0, gameState.yardline + step))
    return res.json(gameState)

})
//post/api/game/teams {hometeamId, awayTeamId }
router.post("/teams", (req, res) =>{
    const {homeTeamId, awayTeamId} = req.body || {};
    //map ids -> names(in our mock data in teamRoutes.js)
    const homeMap = {1:"Home Ravens", 2:"Home Cowboys" };
    const awayMap = {3:"Away DaBears", 4:"Away Dolphins"};
    if (homeTeamId in homeMap) gameState.homeTeamName = homeMap[homeMap]
    if (awayTeamId in awayMap) gameState.awayTeamName = awayMap[awayMap]
    return res.json(gameState)
})


// POST -> Reset Game
router.post("/reset", (req, res) => {
    gameState = {
        score: {HOME: 0, AWAY: 0},
        possession:"HOME",
        quarter: 1,
        status: "IN_PROGRESS",
        yardline:25,
        homeTeamName:gameState.homeTeamName,
        awayTeamName:gameState.awayTeamName

    
    };
    res.json({message: "Game Reset", gameState})
})

export default router;

