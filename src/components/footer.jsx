function Footer() {
  return (
    <footer className="footer">

      <div className="container text-center">

        <p>
          © {new Date().getFullYear()} Dorathy Godwin.
          All Rights Reserved.
        </p>

        <p>
          Built with React & Bootstrap.
        </p>

      </div>

    </footer>
  );
}

export default Footer;