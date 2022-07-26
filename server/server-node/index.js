const http = require('http')

const App = http
    .createServer((req, res) => {
        console.log(req.url)
        res.end('hahahah')
    })
    .listen(8001, () => {
        console.log('node服务开启')
    })
