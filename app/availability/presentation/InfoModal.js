const React = require('react')
const { string } = React.PropTypes;

const InfoModal = ({
  name,
  address,
  info,
  links,
  onClose
}) => (
  <div>
    <div className="modal-backdrop in" />
    <div className="modal modal-hx" style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="clearfix modal-header">
            <a className="close" href={links.index} onClick={onClose} aria-label="Close" type="button">
              <span aria-hidden="true">
                ×
              </span>
            </a>
            <h2>
              {name}
              <br />
              <small>{address}</small>
            </h2>
            <ul className="nav nav-tabs">
              <li className="active">
                <a title="info">Info</a>
              </li>
            </ul>
          </div>
          <div className="modal-body">
            <p dangerouslySetInnerHTML={{__html: info}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

InfoModal.propTypes = {
  name: string.isRequired
}

module.exports = InfoModal
