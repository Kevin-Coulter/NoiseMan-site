const checkoutUrl = import.meta.env.VITE_PADDLE_CHECKOUT_URL

function BuyButton({ className = '' }) {
  return (
    <div className={`buy-wrapper ${className}`.trim()}>
      {checkoutUrl ? (
        <a
          className="btn btn-primary"
          href={checkoutUrl}
          target="_blank"
          rel="noreferrer"
        >
          Buy Now
        </a>
      ) : (
        <button
          className="btn btn-primary btn-disabled"
          type="button"
          disabled
          title="Checkout link coming soon"
        >
          Buy Now
        </button>
      )}
      {!checkoutUrl && (
        <span className="checkout-note">Checkout link coming soon</span>
      )}
    </div>
  )
}

export default BuyButton
