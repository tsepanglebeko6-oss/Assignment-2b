import EnquiryForm from '../components/EnquiryForm';

function Enquiry({ presetDestinationId }) {
  return (
    <main className="page enquiry-page">
      <header className="page-header">
        <p className="eyebrow">Visitor desk</p>
        <h1>Plan your Lesotho trip</h1>
        <p>
          Tell us where you would like to go. We will reply with suggested routes, guides and
          estimated costs.
        </p>
      </header>
      <EnquiryForm presetDestinationId={presetDestinationId} />
    </main>
  );
}

export default Enquiry;
