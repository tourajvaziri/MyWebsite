import * as React from 'react';
import { Link } from 'react-router-dom';

class NotFoundResume extends React.Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, there is nothing to see here.</p>
                <p><Link to="Home">Back to Home</Link></p>
            </div>
        );
    }
}

export default NotFoundResume;