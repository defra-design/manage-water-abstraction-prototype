window.GOVUKPrototypeKit.documentReady(() => {

  // – – – – – – – – – – – – Home page search – – – – – – – – – – – – 
  const searchButton = document.getElementById('search-button')
  const searchInput = document.getElementById('search')
  const sessionDataElement = document.getElementById('session-data')
  const searchResultsContainer = document.getElementById('search-results-container')
  const noResultsMessage = document.getElementById('no-results-message')
  const searchResultsTable = document.querySelector('.search-results-table')
  const applySearchFilterButton = document.getElementById('apply-search-filter')
  const clearSearchFilterButton = document.getElementById('clear-search-filter')

  if (searchButton && searchInput && sessionDataElement && searchResultsTable) {
    let sessionData = {}
    
    try {
      sessionData = JSON.parse(sessionDataElement.textContent)
    } catch (e) {
      console.error('Failed to parse session data:', e)
      return
    }

    const licences = sessionData.licences || []
    const customers = sessionData.customers || []

    const getSelectedSearchFilter = () => {
      const selectedFilter = document.querySelector('input[name="search-filter"]:checked')
      return selectedFilter ? selectedFilter.value : 'licences'
    }

    const isFilterExplicitlySelected = () => {
      return document.querySelector('input[name="search-filter"]:checked') !== null
    }

    const searchTermMatchesHolder = (searchTerm) => {
      return licences.some((licence) => {
        const holderName = licence.holder || ''
        return holderName.toLowerCase().includes(searchTerm)
      })
    }

    const getSearchFilter = (searchTerm) => {
      if (isFilterExplicitlySelected()) {
        return getSelectedSearchFilter()
      }

      return searchTermMatchesHolder(searchTerm) ? 'holders' : 'licences'
    }

    const getHolderResults = (searchTerm) => {
      const holderMap = licences.reduce((acc, licence) => {
        const holderName = licence.holder || ''
        if (!holderName.toLowerCase().includes(searchTerm)) {
          return acc
        }

        if (!acc[holderName]) {
          acc[holderName] = {
            holder: holderName,
            licenceCount: 0,
            billingRegions: new Set(),
            customerID: customers.findIndex((c) => c.name === holderName)
          }
        }

        acc[holderName].licenceCount += 1
        if (licence.billingRegion) {
          acc[holderName].billingRegions.add(licence.billingRegion)
        }

        return acc
      }, {})

      return Object.values(holderMap).map((result) => ({
        holder: result.holder,
        licenceCount: result.licenceCount,
        billingRegion: Array.from(result.billingRegions).join(', '),
        customerID: result.customerID
      }))
    }

    const getLicenceResults = (searchTerm) => {
      return licences
        .map((licence, id) => ({ licence, id }))
        .filter((result) => {
          const licence = result.licence
          return (
            licence.number.toLowerCase().includes(searchTerm) ||
            (licence.holder && licence.holder.toLowerCase().includes(searchTerm)) ||
            (licence.name && licence.name.toLowerCase().includes(searchTerm))
          )
        })
    }

    const createTableRow = (result, isHoldersSearch) => {
      const tr = document.createElement('tr')
      tr.className = 'govuk-table__row'

      if (isHoldersSearch) {
        const holderCell = document.createElement('td')
        holderCell.className = 'govuk-table__cell'
        holderCell.append('Holder: ')

        if (result.customerID >= 0) {
          const link = document.createElement('a')
          link.href = `/internal/customer?customerID=${result.customerID}`
          link.className = 'govuk-link'
          link.textContent = result.holder
          holderCell.appendChild(link)
        } else {
          holderCell.append(result.holder)
        }
        tr.appendChild(holderCell)

        const licenceCountCell = document.createElement('td')
        licenceCountCell.className = 'govuk-table__cell'
        licenceCountCell.textContent = `Number of licences: ${result.licenceCount}`
        tr.appendChild(licenceCountCell)

        const billingRegionCell = document.createElement('td')
        billingRegionCell.className = 'govuk-table__cell'
        billingRegionCell.textContent = `Billing region: ${result.billingRegion || '-'}`
        tr.appendChild(billingRegionCell)
      } else {
        const licence = result.licence
        const customerID = customers.findIndex((c) => c.name === licence.holder)
        const customerQuery = customerID >= 0 ? `&customerID=${customerID}` : ''

        const licenceCell = document.createElement('td')
        licenceCell.className = 'govuk-table__cell'
        licenceCell.append('Licence: ')
        const link = document.createElement('a')
        link.href = `/internal/licence?ID=${result.id}${customerQuery}`
        link.className = 'govuk-link'
        link.textContent = licence.number
        licenceCell.appendChild(link)
        tr.appendChild(licenceCell)

        const holderCell = document.createElement('td')
        holderCell.className = 'govuk-table__cell'
        holderCell.textContent = `Licence holder: ${licence.holder}`
        tr.appendChild(holderCell)

        const licenceCountCell = document.createElement('td')
        licenceCountCell.className = 'govuk-table__cell'
        licenceCountCell.textContent = `Number of licences: ${customers.filter((c) => c.name === licence.holder).length}`
        tr.appendChild(licenceCountCell)
      }

      return tr
    }

    const updateTableHeaders = (filterType) => {
      const headerCells = searchResultsTable.querySelectorAll('thead th')
      if (headerCells.length < 3) return

      const headers = filterType === 'holders'
        ? ['Holder', 'Number of licences', 'Billing region']
        : ['Licence', 'Licence holder', 'End date']

      headers.forEach((text, index) => {
        headerCells[index].textContent = text
      })
    }

    const displayResults = (results, filterType) => {
      const isHoldersSearch = filterType === 'holders'

      updateTableHeaders(filterType)

      const tbody = searchResultsTable.querySelector('tbody')
      if (tbody) {
        tbody.innerHTML = ''
        results.forEach((result) => {
          tbody.appendChild(createTableRow(result, isHoldersSearch))
        })
      }

      const caption = searchResultsTable.querySelector('caption')
      if (caption) {
        caption.textContent = `Showing ${results.length} result${results.length !== 1 ? 's' : ''}`
      }

      searchResultsContainer.style.display = 'block'
      noResultsMessage.style.display = 'none'
    }

    const performSearch = (filterType = 'licences') => {
      const searchTerm = searchInput.value.trim().toLowerCase()

      if (!searchTerm) {
        searchResultsContainer.style.display = 'none'
        noResultsMessage.style.display = 'block'
        noResultsMessage.textContent = 'Enter a search term'
        return
      }

      const results = filterType === 'holders'
        ? getHolderResults(searchTerm)
        : getLicenceResults(searchTerm)

      if (results.length === 0) {
        searchResultsContainer.style.display = 'none'
        noResultsMessage.style.display = 'block'
        noResultsMessage.textContent = 'No results found'
        return
      }

      displayResults(results, filterType)
    }

    const handleSearch = () => {
      const searchTerm = searchInput.value.trim().toLowerCase()
      const filterType = searchTerm ? getSearchFilter(searchTerm) : 'licences'
      performSearch(filterType)
    }

    searchButton.addEventListener('click', handleSearch)
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    })

    if (applySearchFilterButton) {
      applySearchFilterButton.addEventListener('click', () => {
        const selectedFilter = getSelectedSearchFilter()
        if (selectedFilter === 'licences' || selectedFilter === 'holders') {
          performSearch(selectedFilter)
        }
        const searchFilterDetails = document.getElementById('search-filter-details')
        if (searchFilterDetails) {
          searchFilterDetails.removeAttribute('open')
        }
      })
    }

    if (clearSearchFilterButton) {
      clearSearchFilterButton.addEventListener('click', () => {
        document.querySelectorAll('input[name="search-filter"]').forEach((input) => {
          input.checked = false
        })
        searchResultsContainer.style.display = 'none'
        noResultsMessage.style.display = 'none'
        updateTableHeaders('licences')

        const searchFilterDetails = document.getElementById('search-filter-details')
        if (searchFilterDetails) {
          searchFilterDetails.removeAttribute('open')
        }
      })
    }
  }


  // – – – – – – – – – – – – Contacts filter – – – – – – – – – – – – 
  const filterDetails = document.getElementById('contacts-filter-details')
  const applyButton = document.getElementById('apply-contacts-filter')
  const clearButton = document.getElementById('clear-contacts-filter')
  const contactsTable = document.querySelector('.contacts-table')

  if (filterDetails && applyButton && clearButton && contactsTable) {
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
  }


})
