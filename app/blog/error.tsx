"use client"
const ErrorPage = ({error}: {error: Error}) => {
  return (
    <>
      OOPS {error.message}
    </>
  )
}

export default ErrorPage;