const app = require('./src/app');

const PORT = 3633;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})