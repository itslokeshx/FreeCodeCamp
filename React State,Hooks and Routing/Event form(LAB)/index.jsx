const { useState } = React;

export function EventRSVPForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [attend, setAttend] = useState(0);
  const [diet, setDiet] = useState("");
  const [check, setCheck] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="rsvp-wrapper">
      <div className="rsvp-card">
        <div className="rsvp-header">
          <div className="rsvp-eyebrow">Event Registration</div>
          <div className="rsvp-title">RSVP Form</div>
          <div className="rsvp-subtitle">
            Fill in your details to confirm attendance.
          </div>
        </div>

        <div className="rsvp-body">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Number of Attendees</label>
              <input
                type="number"
                required
                min="1"
                placeholder="1"
                value={attend}
                onChange={(e) => setAttend(e.target.value)}
              />
            </div>

            <div className="field">
              <label>
                Dietary Preferences <span>— optional</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Vegan, Gluten-free"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              />
            </div>

            <div className="divider" />

            <label className="checkbox-field">
              <input
                type="checkbox"
                value={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <span className="checkbox-label">
                Bringing additional guests?
              </span>
            </label>

            <button type="submit" className="submit-btn">
              Confirm RSVP
            </button>
          </form>
        </div>

        {submit && (
          <div className="confirmation">
            <div className="confirmation-title">RSVP Submitted</div>
            <div className="conf-row">
              <span className="conf-key">Name</span>
              <span className="conf-val">{name}</span>
            </div>
            <div className="conf-row">
              <span className="conf-key">Email</span>
              <span className="conf-val">{mail}</span>
            </div>
            <div className="conf-row">
              <span className="conf-key">Attendees</span>
              <span className="conf-val">{attend}</span>
            </div>
            <div className="conf-row">
              <span className="conf-key">Dietary Preferences</span>
              <span className="conf-val">{diet || "None"}</span>
            </div>
            <div className="conf-row">
              <span className="conf-key">Additional Guests</span>
              <span className="conf-val">{check ? "Yes" : "No"}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
