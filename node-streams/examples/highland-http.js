import * as http from 'node:http'
import hs from 'highland'

const PORT = 3000

const server = http.createServer().listen(PORT)

hs('request', server, ['req', 'res']).each(({ req, res }) => {
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		data: 'Hello World!'
	}))
})
