export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <ul className="social">
          <li>
            <a href="http://dribbble.com/homey" target="_blank">
              <i className="zmdi zmdi-dribbble" />
            </a>
          </li>
          <li>
            <a href="http://github.com/jensif" target="_blank">
              <i className="zmdi zmdi-github" />
            </a>
          </li>
          <li>
            <a href="http://linkedin.com/in/jenarevalo" target="_blank">
              <i className="zmdi zmdi-linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto:jensarevalo@gmail.com" target="_blank">
              <i className="zmdi zmdi-email" />
            </a>
          </li>
        </ul>
        <ul className="location">
          <li>Made with ❤️  in Florida</li>
        </ul>
      </div>
    </footer>
  );
}
