import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  const dictionary = [
    { icon: "linkedin-square", url: "https://www.linkedin.com/in/nicolaslanguille/"},
    { icon: "soundcloud", url: "https://soundcloud.com/raum149"},
    { icon: "github", url: "https://github.com/nic-lan"},
    { icon: "linkedin-square", url: "https://www.linkedin.com/in/nicolaslanguille/"},
  ]

  render() {
    return (
      <div className="App">
        <div class="container body">
          <div class="pageIndex">
            <h1 class="pageIndex__h1">niclan</h1>

            <p class="pageIndex__p">
              a musician and a software developer highly interested in clean code and behavior driven development
            </p>
            <div class="fontLinkElement">
              <a href="https://github.com/nic-lan">
                <FontAwesomeIcon icon={faLinkedinSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
