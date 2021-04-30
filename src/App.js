import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Posts from "./utils/components/posts";
import PostsTable from "./utils/components/postsTable";
import Home from "./utils/components/home"
import Navbar from "./utils/components/navbar";
import NotFound from "./utils/components/notFound";

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="container">
          <div className="content">
              <Switch>
                  <Route path="/posts" render={props => <Posts sortBy="newest" {...props} />}/>
                  <Route path="/" exact component={Home} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
