"use client";

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <>
      <div className="">
        <h1>{error.message}</h1>
      </div>
    </>
  );
}
