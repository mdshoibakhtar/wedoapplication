import topsec from "./topsection.json";
export const TopSectionCard = () => {
  const data = topsec;
  return (
    <div className="bg-dark py-4">
      <div className="container p-0">
        <div className="mx-2">
          <div className="container">
            <h5 className="text-light mb-3">Top section </h5>
          </div>
          <div className="row text-light">
            {data.map((item) => {
              return (
                <div className="col-6  my-3" key={item.id}>
                  <div className="ms-.5 border rounded-3 cardImg">
                    <figure>
                      <img src={item.imgUrl} alt="lapi" />
                    </figure>
                    <div className="p-3">
                      <div>
                        <strong>{item.title}</strong>
                      </div>
                      <span className="text-muted">{item.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
