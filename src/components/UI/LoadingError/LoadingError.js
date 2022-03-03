import './LoadingError.sass'

const LoadingError = props => {
    
    
    
    return (
        <div className="loading-error">
            <i className="fas fa-times"></i>
            <h2 className="loading-error__title">Błąd ładowania</h2>
        </div>
    );
}
 
export default LoadingError;