import React, { useEffect, useState } from "react";

// Base URL of the Aayur Care API. Override with REACT_APP_API_BASE_URL at build time.
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://oxqzfa1d8pik21d8pxpqsgjw.200.234.44.53.sslip.io";

const SUPPORT_EMAIL = "info@aayurcare.com";
const DELETION_EMAIL_SUBJECT = "Aayur Care App – Account Deletion Request";

// The app opens this page as /app/delete-account#token=<access token>.
// The token sits in the URL fragment so it never reaches a server log, and is
// removed from the address bar as soon as it has been read.
function readTokenFromUrl() {
  return new URLSearchParams(window.location.hash.slice(1)).get("token");
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function EmailFallback() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    DELETION_EMAIL_SUBJECT
  )}`;
  return (
    <p>
      You can also request deletion by email. Send a message to{" "}
        <a href={mailto}>{SUPPORT_EMAIL}</a> with the subject "
        {DELETION_EMAIL_SUBJECT}" and include your registered mobile number or
        email address so we can verify your request.
    </p>
  );
}

function DeleteAccount() {
  const [token] = useState(readTokenFromUrl);
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const handleDelete = async () => {
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/account/deletion`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirm: true }),
      });

      if (res.status === 202) {
        setResult(await res.json());
        setStatus("done");
        return;
      }

      // The API documents 401 here, but answers 403 "unauthenticated" for a missing token.
      if (res.status === 401 || res.status === 403) {
        setError(
          "We couldn't verify your session, or this account is already scheduled for deletion. Open this page again from the Aayur Care app and try once more."
        );
      } else if (res.status === 400) {
        setError("Please confirm that you want to delete your account.");
      } else {
        setError("Something went wrong on our side. Please try again in a few minutes.");
      }
      setStatus("error");
    } catch (err) {
      setError("We couldn't reach Aayur Care. Check your internet connection and try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="app-policy delete-account">
        <p className="app-policy-brand">AAYUR CARE</p>
        <h1>Account deletion scheduled</h1>
        <div className="delete-account-notice delete-account-success">
          <p>
            Your request was received on{" "}
            <strong>{formatDate(result.requestedAt)}</strong>. Your account
            and personal information will be permanently erased on{" "}
            <strong>{formatDate(result.eraseAfter)}</strong>.
          </p>
          <p>You have been signed out of the Aayur Care app on every device.</p>
        </div>
        <p>
          Some records may be kept where the law requires it, for example for
          accounting, fraud prevention or dispute resolution, as described in
          our <a href="/app/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="app-policy delete-account">
      <p className="app-policy-brand">AAYUR CARE</p>
      <h1>Delete your account</h1>
      <p>
        Deleting your Aayur Care account removes your profile and the personal
        information linked to it.
      </p>

      <h2>What happens when you delete your account</h2>
      <ul>
        <li>You are signed out of the Aayur Care app on every device.</li>
        <li>
          You lose access to active memberships, pending claims, healthcare
          benefits and other associated services.
        </li>
        <li>
          Your account is scheduled for deletion and your personal information
          is permanently erased after the waiting period shown once you
          confirm.
        </li>
        <li>
          Some records may be kept where the law requires it, for example for
          accounting, fraud prevention or dispute resolution, as described in
          our <a href="/app/privacy-policy">Privacy Policy</a>.
        </li>
      </ul>

      {token ? (
        <div className="delete-account-form">
          <label className="delete-account-confirm">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              disabled={status === "submitting"}
            />
            <span>I understand that my Aayur Care account will be deleted.</span>
          </label>

          {status === "error" && (
            <div className="delete-account-notice delete-account-error" role="alert">
              {error}
            </div>
          )}

          <button
            type="button"
            className="delete-account-button"
            onClick={handleDelete}
            disabled={!confirmed || status === "submitting"}
          >
            {status === "submitting" ? "Deleting…" : "Delete my account"}
          </button>
        </div>
      ) : (
        <div className="delete-account-notice">
          <h2>How to delete your account</h2>
          <p>
            In the Aayur Care app, go to <strong>Account / Profile</strong> and
            select <strong>Delete Account</strong>.
          </p>
        </div>
      )}

      <EmailFallback />
    </div>
  );
}

export default DeleteAccount;
