import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>

      <Link href="/people">
        <a>People</a>
      </Link>

      <hr />

      <Link href="/vehicles">
        <a>Vehicles</a>
      </Link>

    </div>
  )
}