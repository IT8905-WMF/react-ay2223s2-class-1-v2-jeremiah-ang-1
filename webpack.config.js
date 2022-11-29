module.exports = {
    entry: {
        App: './output/App.js',
        RockPaperScissors: './output/RockPaperScissors.js',
    },
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    watch: true,
};
