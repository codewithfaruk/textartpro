import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-8 px-4 text-center text-gray-100">
      <small className="mb-4 block capitalize ">
        &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_URL}.
        All rights reserved.
      </small>
      <p className="">Text Face, Text Art and Fancy Text for Social Media.</p>
    </footer>
  );
}
