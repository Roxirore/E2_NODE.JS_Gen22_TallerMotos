require('dotenv').config();

const app = require('./app');
const { dbusers } = require('./database/users.config');
const { dbrepairs } = require('./database/repairs.config');

dbusers.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbusers.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

dbrepairs.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbrepairs.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})