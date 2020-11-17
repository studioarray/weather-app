export const UserConsentDialogue = ({ setUserConsent }) => (
  <div>
    <h2>Hi!</h2>
    <p>You need to share your location to use this app.</p>
    <button onClick={() => setUserConsent(true)}>That's fine</button>
  </div>
);
