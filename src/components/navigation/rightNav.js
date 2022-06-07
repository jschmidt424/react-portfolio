import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function RightNav() {
  return (
    <div className="right-nav">
      <div className="right-nav__container">
        <ul className="social-list">
          <li>
            <a
              href="https://github.com/jschmidt424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jschmidt424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jschmidt21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
