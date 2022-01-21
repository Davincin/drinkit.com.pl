import '../Categories.sass'

const Category = (props) => {

    const backgroundImage = {backgroundImage: `url(${props.backgroundImage})`}
    

    return (
        <a href={props.href} title={props.name} aria-label={props.name} className="categories__category" style={backgroundImage} >
            <div className="categories__hero-category"></div>
            <h3 className="categories__category-title">{props.name}</h3>
        </a>
    );
}
 
export default Category;