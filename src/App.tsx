import './App.css'
import { useEffect } from 'react'
import { getParam } from './utils';

let timer: ReturnType<typeof setTimeout>;
function App() {
  useEffect(() => {
    const accessToken = getParam("#access_token");
    const error = getParam("error");
    const state = getParam("state");
    if (accessToken) {
      const MeUrl = `https://graph.facebook.com/v12.0/me?fields=id%2Cname&access_token=${accessToken}`
      fetch(MeUrl).then(d => d.text()).then(d => JSON.parse(d)).then((response) => {
        console.log(response);
        console.log(state)
      });
      return;
    } 

    if (error) {
      console.log('error', error);
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      const uri = "https://georgegarena.github.io/FB-login-test/";
      const appId = 1092249954903916;

      // @ts-ignore
      window.location = encodeURI(
        `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${uri}&response_type=token&auth_type=rerequest&state=${state}`
      );
    }, 5000)
  }, [])

  return (
    <div>Home</div>
  )
}

export default App
