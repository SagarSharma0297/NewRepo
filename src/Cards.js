import './Cards.css';

const Cards = (props) => {
    return (
        <>

            <div className="card">
                <img className="images" src={props.img.thumbnail} alt="Practical Machine Learning with Python and Keras" />
                <div className="text-part">
                    <h1 className="title">{props.img.title}</h1>
                    <span className="edyoda">{props.img.author}</span> | <span className="date">{props.img.date}</span>
                    <p className="description">{props.img.description}</p>
                </div>
            </div>

        </>
    );
}

export default Cards;
