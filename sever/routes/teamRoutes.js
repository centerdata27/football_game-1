import express from "express"
const router = express.Router()

const teams = [
    {id: 1, code: "HOME", name: "Home Ravens", primaryColor:"#241773"},
    {id: 2, code: "HOME", name: "Home Cowboys", primaryColor:"#002145"},
    {id: 3, code: "AWAY", name: "Away DaBears", primaryColor:"#C83803"},
    {id: 4, code: "AWAY", name: "Away Dolphins", primaryColor:"#008E98"}
];

router.get("/", (req, res) => res.json(teams))

router.get("/:id", (req, res)=> {
    const id = Number(req.params.id)
    const team = teams.find((t) =>t.id === id)
    if (!team) return res.status(404).json({error:"Team not Found!"})
    res.json(team);
});

export default router;