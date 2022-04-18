import { Link } from 'react-router-dom';


const MovieCard = function (props) {
    const { data } = props;
    // console.log(data);
    return (

        <div className="col hp">
            <div className="card h-100 shadow-sm">
                <Link to={`/movie-details/${data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="card-img-top" alt="product.title" />
                </Link>

                <div className="label-top shadow-sm">
                    <a className="text-white" href="#">{data.original_language}</a>
                </div>
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-success">{data.vote_average}/10</span>

                        <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">reviews</a></span>
                    </div>
                    <h5 className="card-title d-flex justify-content-center align-items-center">
                        <Link target="_blank" to={`/movie-details/${data.id}`}>{data.title}</Link>
                    </h5>

                    <div className="d-grid gap-2 my-4">

                        <Link to={`/movie-details/${data.id}`} className="btn btn-warning bold-btn">Full Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default MovieCard;