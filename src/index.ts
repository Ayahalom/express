import { resolveMx } from "dns";
import express from "express"
import { distanceCalculator } from './physics-functions'

const app = express();
const port: number = 5000;

app.get('/', (req, res) => {
    res.send('<h1>hello World</h1>');
})

app.get('/api/calculate/velocity/:velocity/angle/:angle', (req, res) => {
    const { velocity, angle } = req.params; // Trying to anotate types was weird
    res.send(`Throw distance is ${distanceCalculator(parseInt(velocity), parseInt(angle))}`);
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${port}`)
})