import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3500"
    
})

// Note: install json-server and axios in the terminal
// Start json server in frontend folder terminal using ===> npx json-server -p 3500 -w src/menu/myMenuDetails.json
// -p == port number
// -w == watch (for changes in json file)
// view the json database on: "http://localhost:3500/posts"

