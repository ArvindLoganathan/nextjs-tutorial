"use client"
export default function Error({error}:{error:Error}) {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>error found {error?.message}</h1>
    </main>
  );
}
