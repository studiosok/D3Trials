$(() => {
  $('.search').submit((e) => {
    e.preventDefault()

    const query = $('#query').val()
    // console.log(query)

    subjectCall(query)
    afterClick()
  })

  /*function afterClick () {
    $('#beforeClick').toggle()
    $('#afterClick').toggle()
    $('#afterClicks').toggle()
    $('.onReset').toggle()
    $('#showBox').text(query)
  }*/

  function displayResults (outputs) {
      // console.log(outputs)
      // outputs.forEach((output) => {
        $('#showDefinition').append(
            `${outputs.definition}`
          )
      // })
    }

    function displaySearchedWord (output) {
            $('#showBox').text(
              `${output.word}`)
      }

  const dictionaryKey = '9f0b135d-1941-494c-b7bc-aeebe975e633'
  const thesaurusKey = 'c92046af-44ce-408b-805b-f0890890dafe'


  async function subjectCall(searchTerm) {
    let headword = word
    let ref
  const url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
    try {
    const response = await axios.get(url, {
      params: { headword,  ?key=: dictionaryKey
      }
    })
    // console.log(response.data.list[0].definition)
    displayResults(response.data.list[0])
    displaySearchedWord(response.data.list[0])
  } catch(error) {
    console.log(error)
  }

  }



})
