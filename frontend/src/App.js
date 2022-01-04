import CourseList from "./container/CourseList";
import Detail from "./container/Detail";
import VideoPlayer from "./container/VideoPlayer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navig from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navig />
        <Switch>
          <Route path="/" component={CourseList} exact />
          <Route path="/course-detail" component={Detail} exact />
          <Route path="/course-video-player" component={VideoPlayer} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
