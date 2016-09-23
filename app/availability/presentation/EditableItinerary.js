const React = require('react')

const { Button } = require('react-bootstrap')

module.exports = ({
  from,
  to,
  location,
  editing,
  onChange,
  onSubmit,
  onEditButtonClick,
  editHref,
  submitHref
}) => (
  <div className="itinerary">
    { !editing && (
      <span>
        From {new Date(from).toDateString()} until {new Date(to).toDateString()}.&nbsp;
        <Button bsSize="xsmall" onClick={onEditButtonClick} href={editHref}>Edit</Button>
      </span>
    )}
    { editing && (
      <form action={submitHref} method="get" onSubmit={onSubmit}>
        From&nbsp;
        <input type="date" value={from} name="from" onChange={onChange} />
        &nbsp;until&nbsp;
        <input type="date" value={to} name="to" onChange={onChange}/>.&nbsp;
        <input type="hidden" value={location} name="location"/>
        <Button bsSize="xsmall" bsStyle="primary" type="submit">Search</Button>
      </form>
    )}
  </div>
)
