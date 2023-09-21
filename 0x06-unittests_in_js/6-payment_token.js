// Get payment token from API function

const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve) => {
    if (success === true) {
      setTimeout(() => {
        resolve({ data: 'Successful response from the API' })
      }, 0)
    }
  })
}

module.exports = getPaymentTokenFromAPI
