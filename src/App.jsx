import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import AboutMe from './Practical 10/AboutMe';
import MovePage from './Practical 10/MovePage';
import RootPage from './Practical 10/RootPage';
import RockPaperScissors from './RockPaperScissors';

const router = createHashRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <RockPaperScissors />,
            },
            {
                path: 'about',
                element: <AboutMe />,
            },
            {
                path: 'move/:moveId',
                element: <MovePage />,
            },
        ],
    },
]);

function App(props) {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
