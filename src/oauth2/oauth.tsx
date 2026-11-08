import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OAuth2Callback() {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Extract code from URL
    const params = new URLSearchParams(window.location.search);
    const authCode = params.get("code");
    setCode(authCode);

    if (!authCode) {
      navigate("/login"); // If no code, redirect back to login
    }
  }, [navigate]);

  return (
    <div>
      <h3>Signing you in...</h3>
      {code && <p>Authorization Code: {code}</p>}
    </div>
  );
}

export default OAuth2Callback;