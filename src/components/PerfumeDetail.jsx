import { ALL_PERFUME } from "../AllPerfume";
import { Navigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

function PerfumeDetail() {
  const { id } = useParams();

  const selectedPerfume = ALL_PERFUME.find((perfume) => perfume.id === id);
  if (!selectedPerfume) {
    return <Navigate to="/404" />;
  }
  return (
    <>
      <ScrollToTopOnMount />
      <section>
        {selectedPerfume && (
          <div className="hp-perfume-section">
            <div className="hp-perfume-left">
              <img src={selectedPerfume.img} alt={selectedPerfume.name} />
            </div>
            <div className="hp-perfume-description">
              <h1 className="hp-perfume-title">Product Description</h1>
              <div>
                {selectedPerfume.description.split("\n").map((line, index) => (
                  <p key={index}>
                    {line}
                    <br />
                  </p>
                ))}
              </div>
            </div>
            <div className="hp-perfume-details">
              <h1>{selectedPerfume.mark}</h1>
              <h2>
                {selectedPerfume.name} {selectedPerfume.volume}
              </h2>
              <h3>${selectedPerfume.price}</h3>
              <div className="stocktext">
                <FaCheck className="checkxd" />
                <p>In Stock</p>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PerfumeDetail;
