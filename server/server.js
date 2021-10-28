const path = require('path');
const fs = require('fs');
const rp = reqiure("request-promise")
const chirps = [
    {
        name: "jj",
        message: "idk"

},
{
    name: "orin",
        message: "idk too"
},
{
    name: "garry",
    message: 'idk three'

},
{
    name: "lizzy",
    message:'plus ultra'
},
]
fs.writeFile('chirps.json', JSON.stringify(chirps),(err)  => {
    if(err) throw err;
})
fs.readFile("./chirps.json", (err, data) => {
    if(err) throw err;
})
const request = require('request-promise')

let dataPath = path.join(_dirname, '../datajson');
rp("https://reddit.com/r/popular.json", (err, res, body) => {

if(err) console.log(err);

fs.writeFile(dataPath, res.body, err => {
    if(err) console.log(err);
});
});



