const fs = require('fs');
const path = require('path');

let DB_Whisking = {   
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    writeUsersJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(dataBase), "utf-8")
    }
 }

 module.exports = DB_Whisking
