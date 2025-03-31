interface Reference {
  label: string;
  src: string;
  href: string;
  className?: string;
}

/**
 * Footer component for personal references, like portfolio, email, number, etc.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  const references: Reference[] = [
    {
      label: "@JorgelRight34",
      src: "/icons/github-logo.png",
      href: "https://github.com/JorgelRight34/movies",
      className: "invert-filter",
    },
    {
      label: "Portafolio",
      src: "/icons/portafolio-logo.png",
      href: "https://jorgelorenzom.vercel.app/",
      className: "invert-filter",
    },
    {
      label: "LinkedIn",
      src: "/icons/linkedin-logo.webp",
      href: "https://linkedin.com/in/jorge-lorenzo-mendez/",
      className: "invert-filter",
    },
    {
      label: "Teléfono +1 (829) 340-4557",
      src: "/icons/phone-logo.png",
      href: "tel:+18293404557",
      className: "invert-filter",
    },
  ];

  return (
    <footer className="bg-black text-light py-5">
      <div className="container">
        {/* Top row */}
        <div className="row mb-5">
          {/* Personal references */}
          <div className="d-block d-lg-flex justify-content-center flex-wrap gap-5">
            {references.map((reference, key) => (
              <a
                className="d-flex align-items-center mb-5 mb-lg-0"
                target="_blank"
                href={reference.href}
                key={key}
              >
                <img
                  src={reference.src}
                  loading="lazy"
                  className={`small-logo rounded-circle invert-filter me-2${
                    reference.className ? " " + reference.className : ""
                  }`}
                />
                <span>{reference.label}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Bottom row with the rights text */}
        <div className="row pb-5 pb-lg-0">
          <div className="col text-center">
            <p>
              &copy; {new Date().getFullYear()} Jorge Ernesto Lorenzo Méndez.
              All Rights Reserved.
            </p>
          </div>
        </div>
        {/* Div that ocuppies the space of the bottom navbar on small devices */}
        <div className="d-block d-lg-none" style={{ height: "5rem" }}></div>
      </div>
    </footer>
  );
};

export default Footer;
