import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Hello Arvind</div>
        <Link href='/users'>users</Link>
        <Link href='/home'>home</Link>
    </main>
  );
}
