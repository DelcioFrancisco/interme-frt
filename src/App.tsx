import './App.css'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080'
const googleLoginUrl = new URL('/oauth2/authorization/google', backendUrl).toString()

function App() {
  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">i</div>
        <p className="eyebrow">WELCOME TO INTERME</p>
        <h1 id="login-title">Sign in to your account</h1>
        <p className="login-description">
          Continue securely with your Google account.
        </p>

        <a className="google-login" href={googleLoginUrl}>
          <svg
            className="google-logo"
            viewBox="0 0 48 48"
            role="img"
            aria-label="Google"
          >
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.73 6C44.43 38.08 46.98 31.94 46.98 24.55Z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.88.93 7.56 2.56 10.78l7.97-6.19Z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.91 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
          </svg>
          <span>Continue with Google</span>
        </a>

        <p className="login-note">
          You’ll be redirected to Google to securely authenticate.
        </p>
      </section>
      <footer className="login-footer">Simple, secure sign-in</footer>
    </main>
  )
}

export default App
