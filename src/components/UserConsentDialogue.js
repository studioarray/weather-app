import { StatusText, LargeType, RegularType, Button } from "./Styles";

export const UserConsentDialogue = ({ setUserConsent }) => (
  <StatusText>
    <LargeType>Hi!</LargeType>
    <RegularType>
      You'll need to share your location to use this app.
    </RegularType>
    <Button onClick={() => setUserConsent(true)}>That's OK</Button>
  </StatusText>
);
