import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/app.context";
import store from "./redux/store";
import Home from "./pages/home";
import AddStudent from "./pages/add_student";
import EditStudent from "./pages/edit_student";
import About from "./pages/about";
import NoPage from "./pages/no_page";

function App({ studentAPI }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/"}>
                <img
                  src="/student.png"
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/addstudent"}>
                    Add Student
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home studentAPI={studentAPI} />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/editstudent" element={<EditStudent />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
