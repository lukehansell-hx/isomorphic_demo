const _ = {
  assign: require('lodash/assign')
}

const HapiSDK = require('hapi-sdk')

const TOKEN = 'ef008a98-9434-11e1-af41-123143040224'

export function availabilitySearch(props) {
  const sdk = new HapiSDK(TOKEN)

  return new Promise((resolve, reject) => {
    sdk.product.availabilitySearch(_.assign(props, {
      productType: 'carparks'
    }), (err, result) => {
      if(err) return reject(err)

      resolve(result)
    })
  })
}
