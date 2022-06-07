import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <h1 className="home__title">
            <span className="home__title--main">
              <h1>Well hello there!</h1>
            </span>
            <span className="home__title--sub">
              <h3>Thank you for pressing the home button :)</h3>
            </span>
          </h1>
          <p className="home__text">
            My name is Josh and I enjoy creating things that live on the web. My
            interest in web development started back in 2008 when I started
            using Adobe DreamWeaver in school. Along with modifying my profile on
            MySpace. Quickly, I fell in love with seeing everything I write come
            to life. 
          </p>
          <p className="home__text">
            Currently, I work as a freelance developer. Bringing the imagination of
            my clients to life.
          </p>
          <p className="home__text">
            Here are some of the technologies I've been working with recently:
            <ul>
              <li>
                <h3>HTML</h3>
              </li>
              <li>
                <h3>CSS</h3>
              </li>
              <li>
                <h3>Javascript (ES6+)</h3>
              </li>
              <li>
                <h3>React</h3>
              </li>
              <li>
                <h3>Node.js</h3>
              </li>
              <li>
                <h3>Vue</h3>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
