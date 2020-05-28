const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    "name": "John Lomboh",
    "number": "990099",
    "id": 10
  },
  {
    "name": "Dem-Ta",
    "number": "911",
    "id": 11
  },
  {
    "name": "Ghislaine Maxwell",
    "number": "121212121",
    "id": 12
  },
  {
    "name": "Obnoxious Ad",
    "number": "99900022",
    "id": 14
  },
  {
    "name": "Mibmb",
    "number": "231313131",
    "id": 17
  },
  {
    "name": "Noba",
    "number": "1212123`3",
    "id": 18
  },
  {
    "name": "Binomo",
    "number": "2414141",
    "id": 19
  },
  {
    "name": "Mib",
    "number": "323131",
    "id": 20
  },
  {
    "name": "Meet me in",
    "number": "21231",
    "id": 21
  },
  {
    "name": "Under Control",
    "number": "231313131",
    "id": 23
  },
  {
    "name": "Nick Kasabian",
    "number": "31233131",
    "id": 24
  },
  {
    "name": "Joe Jonas",
    "number": "21313131",
    "id": 25
  },
  {
    "name": "Herbert Groove",
    "number": "08313131131",
    "id": 27
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Welcome to phonebook API!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`<div>
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
  </div>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})