const url = "/data.json"

export default fetch(url).then(r => r.json())