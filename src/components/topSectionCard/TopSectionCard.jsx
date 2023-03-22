import topsec from "./topsection.json";
export const TopSectionCard = () => {
  const data = topsec;
  return (
    <div className="bg-dark py-4">
      <div className="container p-0">
        <div className="mx-2">
          <h5 className="text-light mb-3">Top section</h5>
          <div className="row text-light">
            {data.map((item) => {
              return (
                <div className="col-6  p-0 my-3">
                  <div className="mx-2 border rounded-3 cardImg">
                    <figure>
                      <img src={item.imgUrl} alt="lap" />
                    </figure>
                    <strong>{item.title}</strong>
                    <span className="text-warning">{item.price}</span>
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
