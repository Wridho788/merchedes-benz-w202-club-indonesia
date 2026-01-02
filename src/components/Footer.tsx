export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container py-12 text-center space-y-4">
        <p className="font-heading tracking-wide">
          Mercedes-Benz W202 Club Indonesia
        </p>

        <p className="text-sm text-brand-gray max-w-xl mx-auto">
          Komunitas pecinta Mercedes-Benz seri W202 di Indonesia.
        </p>

        <p className="text-xs text-brand-gray">
          © {new Date().getFullYear()} MB W202 Club Indonesia
        </p>
      </div>
    </footer>
  )
}
