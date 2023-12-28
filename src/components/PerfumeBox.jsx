import { useState } from "react";
import { Link } from "react-router-dom";

function PerfumeBox({ data, perfumeID }) {
  const [perfumeLoad, setPerfumeLoad] = useState(true);
  return (
    <>
      {data[perfumeID].map((perfume, id) => (
        <div key={id} className="box-perfume">
          <div className="pick-perfume">
            {perfumeLoad && <span className="loader"></span>}
            <img
              style={{ display: perfumeLoad ? "none" : "block" }}
              src={perfume.img}
              alt="perfume_img"
              onLoad={() => setPerfumeLoad(false)}
            />
          </div>
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${perfume.price}</span>
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model:</span>
                <span>{perfume.model}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Mark:</span>
                <span>{perfume.mark}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Year:</span>
                <span>{perfume.year}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Volume:</span>
                <span>{perfume.volume}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Top Note:</span>
                <span>{perfume.topNote}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Base Note:</span>
                <span>{perfume.baseNote}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Rating:</span>
                <span>{perfume.rating}</span>
              </div>
            </div>
            <Link to={`/perfume/${perfume.id}`} className="cta-btn">
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PerfumeBox;
