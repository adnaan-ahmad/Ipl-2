const express = require('express');
const app = express();
const path = require("./public/data.json");
//const year1 = 2008

app.use(express.static("public"))
app.get('/economyBowler', (req,res) => {
    let year1 = req.query.year
    console.log(year1)
    //const year1 = 2008
    res.send(path.economyBowler[year1])
    // .find(e => e.year1 === parseInt(req.params.year1))
    //if(!economy) res.status(404).send('Year not found')
    //res.send(economy)
    //console.log(economy)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
