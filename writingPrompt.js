$(() => {
  $('.search').submit((e) => {
    e.preventDefault()

  })

  const clickCall = function() {
    subjectCall()
    locationCall()
    adjectiveCall()
  }
$("button").click(clickCall)

function displaySubject(subject) {
  $('#showSub').text(`${subject}`)
}

function displayLocation(location) {
  $('#showLoc').text(`${location}`)
}

function displayAdjective(adjective) {
  $('#showAdj').text(`${adjective}`)
}

const randomKey = 'zb9gbcfcmjbl0b0cmni9wr47r2au0gzp03c06cr5bkzxrqpbc'

  async function subjectCall() {
    const randomUrl = `${"https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key="}`
    const call = `${randomUrl}${randomKey}`
      try {
      const response = await axios.get(call)
      let subject = response.data.word
      displaySubject(response.data.word)
      return subject
    } catch(error) {
      console.log(error)
      }
    }

  function getNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  async function locationCall() {
    const url = 'https://swapi.dev/api/planets/'
    const number = getNumber(0, 60)
    const call = `${url}${number}${'/'}`
      try {
      const response = await axios.get(call)
      let location = response.data.name
      displayLocation(location)
    } catch(error) {
      console.log(error)
    }
    }

  async function adjectiveCall() {
    const randomUrl = `${"https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key="}`
    const call = `${randomUrl}${randomKey}`
      try {
      const response = await axios.get(call)
      displayAdjective(response.data.word)
    } catch(error) {
      console.log(error)
    }
  }
    
})
