import './App.css';
import AppRoutes from "./Routes/Routes";
import Header from './Components/NavBar';

function App() {
    return (
        <>
            <AppRoutes />
        </>
    )
}

export default App;


// By default React is used to create dynamic single page applications SPA ( website that only contains 1 page ), React does not support multiple page application (MPA) but there is a package that can be used with React to create multi-page application called react-router

// Navigation between different pages like done in normal HTML is not possible with React

// => Therefore "react-router" is used to create websites with React that will contains multiple pages

// => react-router will locallly have that page and we will only the fly generates the HTML content for that

// Means react-router creates the local pages and each page has it different react that will handle that

// Different SYNTAX to create Routes / url of the React-application