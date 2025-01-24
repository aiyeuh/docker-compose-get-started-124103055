const GREETINGS = [
    "Whalecome!",
    "All hands on deck yoo!",
    "Charting the course ahead come on!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};