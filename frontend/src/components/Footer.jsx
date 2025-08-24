import React from "react";

export default function Footer({darkMode}) {
  return (
    <footer className={darkMode ? "border-t border-gray-700 py-4 text-center text-gray-200" : "border-t mt-12 py-4 text-center text-orange-400"}>
      © 2025 CareerConnect.
    </footer>
  );
}
