import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{ color: 'green', textAlign: 'center' }}>
            <h1>Page not found</h1>
            <button>
                <Link to="/">Regresar</Link>
            </button>
        </div>
    )
}

export default NotFound
