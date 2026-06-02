//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const filterDetails = document.getElementById('contacts-filter-details')
  const applyButton = document.getElementById('apply-contacts-filter')
  const clearButton = document.getElementById('clear-contacts-filter')
  const contactsTable = document.querySelector('.contacts-table')

  // Only run on pages where the contacts filter and table are present.
  if (!filterDetails || !applyButton || !clearButton || !contactsTable) {
    return
  }

  const filterToNoticeType = {
    bills: 'Bills by post',
    returns: 'Returns by email',
    alerts: 'Water abstraction alerts by email'
  }

  const getSelectedFilters = () => {
    return Array.from(document.querySelectorAll('input[name="filter"]:checked')).map((input) => input.value)
  }

  const getRows = () => {
    return Array.from(contactsTable.querySelectorAll('tbody tr'))
  }

  const applyContactsFilter = () => {
    const selectedFilters = getSelectedFilters()

    // No filters selected means show every contact row.
    if (!selectedFilters.length) {
      getRows().forEach((row) => {
        row.style.display = ''
      })
      filterDetails.removeAttribute('open')
      return
    }

    const selectedNoticeTypes = selectedFilters.map((filter) => filterToNoticeType[filter]).filter(Boolean)

    getRows().forEach((row) => {
      const communicationCell = row.cells[2]
      const communicationText = communicationCell ? communicationCell.textContent || '' : ''
      const matchesSelection = selectedNoticeTypes.some((noticeType) => communicationText.includes(noticeType))
      row.style.display = matchesSelection ? '' : 'none'
    })

    filterDetails.removeAttribute('open')
  }

  const clearContactsFilter = () => {
    document.querySelectorAll('input[name="filter"]').forEach((input) => {
      input.checked = false
    })

    getRows().forEach((row) => {
      row.style.display = ''
    })

    filterDetails.removeAttribute('open')
  }

  applyButton.addEventListener('click', applyContactsFilter)
  clearButton.addEventListener('click', clearContactsFilter)
})
