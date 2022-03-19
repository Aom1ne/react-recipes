function Footer() {
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container footer__container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export { Footer };
