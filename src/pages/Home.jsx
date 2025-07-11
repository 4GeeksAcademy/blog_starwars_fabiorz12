
import { getPlanets } from "../api/swapi";
import CardPlanet from "../components/CardPlanet"
import { useFetch } from "../hooks/useFetch";


const Home = () =>{
    const {data : planets, loading: loadingPlanets} = useFetch(getPlanets, null);

    return(
        <>
        <h1>Star Wars Explorer</h1>

        <h2>Planets</h2>
        <div className="row">
            {loadingPlanets ? (
                <p>Loading planets...</p>
                ):(
                planets.map((planet, index) => (
                    <div className="col-md-4" key={index}>
                        <CardPlanet planet={planet} uid={index + 1}/>
                    </div>
                ))
            )}
        </div>
        </>
    );
};

export default Home;