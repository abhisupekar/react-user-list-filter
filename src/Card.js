const Card = (props) => {
  return (
    <div className="flex-box">
      {props.user.results.map((data, index) => (
        <div className="flex-item">
          <div>
            <img
              className="userImage"
              src={data.picture.large}
              height="200px"
              width="210px"
              alt="img"
            ></img>
          </div>
          <div className="details">
            <h2>
              {data.name.first} {data.name.last}
            </h2>
            <p>
              <i>{data.email}</i>
            </p>
            <h3>
              {data.location.city}, {data.location.country}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
