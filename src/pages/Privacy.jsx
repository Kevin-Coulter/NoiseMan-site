function Privacy() {
  return (
    <main className="legal">
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how NoiseMan handles personal information. If you have
            questions, contact support@YOURDOMAIN.com.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <h2>Information we collect</h2>
          <ul>
            <li>Support emails and any details you provide when contacting support.</li>
            <li>Purchase and license confirmation data provided to us by FastSpring.</li>
            <li>Optional anonymous analytics if enabled in the app settings.</li>
            <li>Optional crash reports if you choose to share them.</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>Provide customer support and troubleshoot issues.</li>
            <li>Verify license status and manage purchases.</li>
            <li>Improve product quality, stability, and performance.</li>
          </ul>

          <h2>Purchases and FastSpring</h2>
          <p>
            All payments and refunds are processed by FastSpring. FastSpring may collect billing
            details and payment information according to their own privacy policies. We receive limited
            order metadata such as transaction IDs and license status.
          </p>

          <h2>Analytics and crash reports</h2>
          <p>
            Analytics and crash reporting are optional and can be disabled if available in your
            build. When enabled, we collect anonymized usage metrics and diagnostic logs to help
            improve the plugin.
          </p>

          <h2>Data retention</h2>
          <p>
            Support emails and purchase records are retained only as long as needed to provide
            support, meet legal obligations, or maintain a record of your license.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, email support@YOURDOMAIN.com.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Privacy
