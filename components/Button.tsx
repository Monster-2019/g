"use client";

export default function Button({
  id,
  text,
  val,
}: {
  id: string;
  text: string;
  val: string;
}) {
  return (
    <button id={id} className="rounded border p-2" onClick={() => alert(val)}>
      {text}
    </button>
  );
}
