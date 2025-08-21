import { useEffect } from "react";

const ErrorProneComponent: React.FC = () => {
    useEffect(() => {
        alert('i am here');
        throw new Error("This is a test error!"); // now it happens client-side
    }, []);

    return <div>Will crash after mount</div>;
};

export default ErrorProneComponent;