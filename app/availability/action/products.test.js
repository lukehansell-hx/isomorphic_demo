import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect
const sandbox = sinon.sandbox.create()

import * as actions from './products'
const HapiSDK = require('hapi-sdk')

describe('products actions', () => {
  afterEach(() => {
    sandbox.restore()
  })

  describe('fetchProducts', () => {
    beforeEach(() => {
      sandbox.stub(actions, 'receiveProducts')
    })

    context('when successful', () => {
      beforeEach(() => {
        sandbox.stub(HapiSDK.prototype.product, 'availabilitySearch').yields(null, 'data')
        
      })

      it('calls receiveProducts with the result', () => {
        expect(actions.receiveProducts).to.have.been.called()
      })
    })
  })
})
