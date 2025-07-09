
import CardPlanet from "../components/CardPlanet"


const Home = () =>{



    return(
        <>
        <h1>Star Wars Explorer</h1>

        <h2>Planets</h2>
        <div className="row">
            {loadingPlanets? (
                <p>Loading planets...</p>
            ):(
                planets.map((planet, index) => (
                    <div className="col-md-4 mb-4" key={key}>
                        <CardPlanet planet={planet} uid={planet.uid}/>
                    </div>
                ))
            )}

        </div>
        </>
    )
};

export default Home;