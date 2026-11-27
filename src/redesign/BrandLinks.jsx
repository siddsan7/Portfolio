// Brand logos, drawn on a 16×16 grid:
// GitHub: "mark-github" from GitHub's Primer Octicons (MIT licence).
// LinkedIn: "linkedin" from Bootstrap Icons (MIT licence).
const GITHUB_MARK =
  'M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656'
const LINKEDIN_MARK =
  'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'

function BrandLink({ brand, mark, href, children, ...props }) {
  return (
    <a className={`brand-button ${brand}-button`} href={href} {...props}>
      <svg className="brand-mark" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">
        <path fill="currentColor" d={mark} />
      </svg>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        <span>↗</span>
      </span>
    </a>
  )
}

export function GitHubLink({ children = 'GitHub', ...props }) {
  return (
    <BrandLink brand="github" mark={GITHUB_MARK} {...props}>
      {children}
    </BrandLink>
  )
}

export function LinkedInLink({ children = 'LinkedIn', ...props }) {
  return (
    <BrandLink brand="linkedin" mark={LINKEDIN_MARK} {...props}>
      {children}
    </BrandLink>
  )
}
