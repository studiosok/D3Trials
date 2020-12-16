$(() => {
  $('.search').submit((e) => {
    e.preventDefault()

  })

  const dictionaryKey = '9f0b135d-1941-494c-b7bc-aeebe975e633'
  const thesaurusKey = 'c92046af-44ce-408b-805b-f0890890dafe'

let searchTerm = "fig"
subjectCall(searchTerm)
adjectiveCall(searchTerm)
locationCall()

  async function subjectCall(searchTerm) {
  const url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
  const call = `${url}${searchTerm}${'?key='}${dictionaryKey}`
    try {
    const response = await axios.get(call)
    console.log(response)
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
      console.log(location)
    } catch(error) {
      console.log(error)
    }
    }

  async function adjectiveCall(searchTerm) {
    const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
    const call = `${url}${searchTerm}${'?key='}${thesaurusKey}`
      try {
      const response = await axios.get(call)
      console.log(response)
    } catch(error) {
      console.log(error)
    }
    }


})
