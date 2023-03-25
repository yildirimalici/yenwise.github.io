import React from 'react';

function ErrorPage() {
  return (
    <div className="py-5 text-center error-page">
      <p className="display-1 text-info">404</p>
      <p className="h3 font-weight-lighter">Something's missing</p>
      <p className="">The page you’re looking for can’t be found.</p>
      <div className="d-flex justify-content-center mt-3">
          <a href="/" class="btn btn-primary m-2">Home Page</a>
      </div>
    </div>
  )
}

export default ErrorPage;