const fs = require("fs")
const getScript = () => {
    const result = fs.readdirSync("./public/js").filter(file=>file.endsWith(".js")).map(item=>{
        return `<script src="./js/${item}"></script>`
    })
    return result.join("\n")
}
export default getScript
