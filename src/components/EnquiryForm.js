import { useMemo, useState } from 'react';
import attractions from '../data/attractions';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  destinationId: '',
  visitors: '1',
  visitDate: '',
  message: '',
};

function EnquiryForm({ presetDestinationId = '' }) {
  const [values, setValues] = useState({
    ...initialValues,
    destinationId: presetDestinationId ? String(presetDestinationId) : '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors = {};
    const nameParts = values.fullName.trim().split(/\s+/);

    if (nameParts.length < 2) {
      nextErrors.fullName = 'Enter your first and last name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!/^[0-9+\s()-]{8,}$/.test(values.phone.trim())) {
      nextErrors.phone = 'Enter a valid phone number (at least 8 digits).';
    }

    if (!values.destinationId) {
      nextErrors.destinationId = 'Select a destination.';
    }

    const visitorCount = Number(values.visitors);
    if (!Number.isInteger(visitorCount) || visitorCount < 1 || visitorCount > 30) {
      nextErrors.visitors = 'Number of visitors must be between 1 and 30.';
    }

    if (!values.visitDate) {
      nextErrors.visitDate = 'Choose a preferred visit date.';
    } else if (values.visitDate < today) {
      nextErrors.visitDate = 'Visit date cannot be in the past.';
    }

    if (values.message.trim().length < 12) {
      nextErrors.message = 'Please share a short message (at least 12 characters).';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const destination = attractions.find((item) => String(item.id) === values.destinationId);
    setSubmitted(destination ? destination.name : true);
    setValues({
      ...initialValues,
      destinationId: presetDestinationId ? String(presetDestinationId) : '',
    });
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" name="fullName" value={values.fullName} onChange={updateField} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={values.email} onChange={updateField} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={updateField} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="destinationId">Selected destination</label>
          <select id="destinationId" name="destinationId" value={values.destinationId} onChange={updateField}>
            <option value="">Choose a destination</option>
            {attractions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.destinationId && <p className="error">{errors.destinationId}</p>}
        </div>
        <div className="field">
          <label htmlFor="visitors">Number of visitors</label>
          <input
            id="visitors"
            name="visitors"
            type="number"
            min="1"
            max="30"
            value={values.visitors}
            onChange={updateField}
          />
          {errors.visitors && <p className="error">{errors.visitors}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="visitDate">Preferred visit date</label>
        <input
          id="visitDate"
          name="visitDate"
          type="date"
          min={today}
          value={values.visitDate}
          onChange={updateField}
        />
        {errors.visitDate && <p className="error">{errors.visitDate}</p>}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={values.message} onChange={updateField} />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn primary">
        Send enquiry
      </button>

      {submitted && (
        <p className="success" role="status">
          Thank you. Your enquiry
          {typeof submitted === 'string' ? ` for ${submitted}` : ''} has been received. A visitor
          advisor will contact you shortly.
        </p>
      )}
    </form>
  );
}

export default EnquiryForm;
