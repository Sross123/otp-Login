import React from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp)
  return <div>OtpInput</div>;
};

export default OtpInput;
