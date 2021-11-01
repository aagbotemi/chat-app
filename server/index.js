const app = require("express")()


const PORT = process.env.PORT || 5050



app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))