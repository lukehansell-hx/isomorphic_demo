const React = require('react')

module.exports = () => (
  <div>
    <div className="modal-backdrop in" />
    <div className="modal modal-hx in" style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            Loading...
          </div>
        </div>
      </div>
    </div>
  </div>
)
