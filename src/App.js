import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from "./pages/characters/Characters";
import Episodes from "./pages/episodes/Episodes";
import Locations from "./pages/locations/Locations";
import WatchList from "./pages/watchList/WatctList";
import Menu from "./components/ui/Menu";

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route path="/locations">
                        <Locations />
                    </Route>
                    <Route path="/episodes">
                        <Episodes />
                    </Route>
                    <Route path="/watchList">
                        <WatchList />
                    </Route>
                    <Route exact path="/">
                        <Characters />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
