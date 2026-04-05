const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(0);

  function GenerateOtp() {
    const genotp = Math.floor(100000 + Math.random() * 900000);
    setOtp(genotp);
    setTime(5);
  }
  useEffect(() => {
    if (time === 0) {
      return;
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="assertive">
        {otp
          ? time > 0
            ? ` Expires in: ${time} seconds`
            : "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={GenerateOtp}
        disabled={time > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
