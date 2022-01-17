import CourseList from "./container/CourseList";
import Detail from "./container/Detail";
import Cart from "./container/Cart";
import VideoPlayer from "./container/VideoPlayer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={CourseList} exact />
          <Route path="/course-detail" component={Detail} exact />
          <Route path="/course-video-player" component={VideoPlayer} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
