import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center h-screen flex items-center justify-center flex-col">
      <div className="flex justify-center items-center mb-5">
        <h1 className="inline-block mr-2 text-2xl">404</h1>
        <h2 className="inline-block">This page could not be found.</h2>
      </div>
      <Link href="/">Return Home</Link>
    </div>
  )
}
