import React, { useState } from "react";
import { ALL_PERFUME } from "../AllPerfume";
import { Link } from "react-router-dom";

function Women() {
  const [checkedBrands, setCheckedBrands] = useState({});
  const [perfumeLoad, setPerfumeLoad] = useState(true);

  const WOMEN_PERFUME = ALL_PERFUME.filter((item) => item.men === false);

  function handleChange(item) {
    setCheckedBrands((prevCheckedBrands) => ({
      ...prevCheckedBrands,
      [item]: !prevCheckedBrands[item],
    }));
  }
  function getUniqueBrands(perfumeList) {
    const uniqueBrands = new Set();

    perfumeList.forEach((perfume) => {
      uniqueBrands.add(perfume.mark);
    });

    return Array.from(uniqueBrands);
  }

  const uniqueBrandsList = getUniqueBrands(WOMEN_PERFUME);

  const brandsList = uniqueBrandsList.map((item) => (
    <label key={item} className="brand-checkbox">
      <input
        className="brand-checkbox"
        type="checkbox"
        checked={checkedBrands[item] || false}
        onChange={() => handleChange(item)}
      />
      <span className="checkbox-custom"></span>
      <span className="brand-name">{item}</span>
    </label>
  ));

  const perfumeElements = WOMEN_PERFUME.map((item) => {
    return (
      <div className="perfume-item" key={item.id}>
        <Link to={`../perfume/${item.id}`}>
          {perfumeLoad && <span className="loader"></span>}
          <img
            src={item.img}
            width={300}
            style={{ display: perfumeLoad ? "none" : "block" }}
            alt="perfume"
            onLoad={() => setPerfumeLoad(false)}
          />
          <div className="perfume-info">
            <h3>{item.mark}</h3>
            <h4>{item.model}</h4>
            <h5>${item.price}</h5>
          </div>
        </Link>
      </div>
    );
  });

  const perfumeElementsFiltered = WOMEN_PERFUME.map((item) => {
    return checkedBrands[item.mark] ? (
      <div className="perfume-item" key={item.id}>
        <Link to={`../perfume/${item.id}`}>
          {perfumeLoad && <span className="loader"></span>}
          <img
            src={item.img}
            width={300}
            style={{ display: perfumeLoad ? "none" : "block" }}
            alt="perfume"
            onLoad={() => setPerfumeLoad(false)}
          />
          <div className="perfume-info">
            <h3>{item.mark}</h3>
            <h4>{item.model}</h4>
            <h5>${item.price}</h5>
          </div>
        </Link>
      </div>
    ) : null;
  });
  const isAnyBrandChecked = Object.values(checkedBrands).some((value) => value);
  const displayPerfumeElements = isAnyBrandChecked
    ? perfumeElementsFiltered
    : perfumeElements;

  const clearFilter = () => {
    setCheckedBrands({});
  };

  return (
    <section className="men-section">
      <div className="filter-table">
        <p>Filter by brands:</p>
        <div className="brands-filter">{brandsList}</div>
        <button onClick={clearFilter}>CLEAR</button>
      </div>
      <div className="perfume-list">{displayPerfumeElements}</div>
    </section>
  );
}

export default Women;
