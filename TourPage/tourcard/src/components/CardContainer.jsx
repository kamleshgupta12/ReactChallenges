import Card from "./Card";

function CardContainer({ tour, removeCard }) {

    return (
        <div>
            <div ><h1 className="heading" >Tourist Places</h1></div>
            <div className="cardContainer">

                <div className="card">
                    {
                        tour.map((tour) => {
                            return (<Card {...tour} removeCard={removeCard}></Card>)
                        })
                    }
                </div>
            </div>
            
        </div>





    );

}

export default CardContainer;