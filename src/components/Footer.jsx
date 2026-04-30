export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center space-y-4">

        {/* Brand */}
        <p className="text-lg font-semibold">SkillSphere</p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.3-1.5-1.3-1.5-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.1 3.2.8.9 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A10.7 10.7 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.7L4.9 22H2l7.3-8.4L1 2h6.9l4.8 6.1L18.9 2z"/>
            </svg>
          </a>

        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}