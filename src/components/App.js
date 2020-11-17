import { useState } from "react";
import { WeatherApp } from "./WeatherApp";
import { UserConsentDialogue } from "./UserConsentDialogue";

const App = () => {
  const [userConsent, setUserConsent] = useState(false);
  return userConsent ? (
    <WeatherApp />
  ) : (
    <UserConsentDialogue setUserConsent={setUserConsent} />
  );
};

export default App;
