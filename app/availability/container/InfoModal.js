const React = require('react')
const { Component } = React
import { connect } from 'react-redux'

const Modal = require('../presentation/InfoModal');
const LoadingModal = require('../../shared/presentation/LoadingModal');
class InfoModal extends Component {

  static fetchData() {
    return Promise.resolve()
  }

  render() {
    if(this.props.isFetchingProducts) return (
      <LoadingModal />
    )

    return (
      <Modal
        {...this.props.product}
        onClose={(e) => this.handleClose(e)}
      />
    )
  }

  handleClose(e) {
    e.preventDefault()
    this.context.router.push(this.props.product.links.index)
  }
}

InfoModal.contextTypes = {
  router: React.PropTypes.object
}

InfoModal.mapStateToProps = (state = {
  availability: {},
}, ownProps) => {
  const {
    products,
    isFetchingProducts
  } = state.availability.products || {
    products: [],
    isFetchingProducts: true
  }

  return {
    product: products.find(product => product.code === ownProps.routeParams.code),
    isFetchingProducts
  }
}

module.exports = connect(InfoModal.mapStateToProps)(InfoModal)
