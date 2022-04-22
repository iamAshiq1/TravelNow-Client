import React from "react";

const News = () => {
  return (
    <>
      <h2 className="text-center fw-bolder pt-5">Our Blogs</h2>
      <hr />
      <div className="row mb-5 pb-3 mx-1 gap-5 justify-content-center">
          <div className="col-lg-3">
              <img width="100%" src="https://static.mansionglobal.com/production/media/article-images/dfc5fb3a6a97fd4e26bbd2c1aa10e99a/large_Luxembourg.jpg" alt=""/>
              <h4 className="fw-bold mt-3">Taxes for Travelers Abroad: 5 Things You Need To Know</h4>
              <p>Over 45 million Americans traveled abroad in 2019 – some of them for business. And while the pandemic has dampened those numbers, the need to experience the sights and sounds of the world remains.</p>
          </div>
          <div className="col-lg-3">
              <img width="100%" src="https://expertvagabond.com/wp-content/uploads/travel-camera-gear-italy-900x600.jpg" alt="" />
              <h4 className="fw-bold mt-3">Five Steps to Bringing More Compelling Photographs</h4>
              <p>If you’re planning a travel adventure this year – be it a long-term, multi-country, round-the-world tour or a just a one week vacation – the experience may be a once-in-a-lifetime adventure, </p>
          </div>
          <div className="col-lg-3">
              <img width="100%" src="https://scienceblog.com/wp-content/uploads/2016/11/RuddCenterBabyFoodShop_Cover-62_resized-v3-900x600.jpg" alt="" />
             <h4 className="fw-bold mt-3">How to Bargain in Foreign Countries, Aplying Tricks</h4>
             <p>
             This rule states that we should always take the starting price that a shopkeeper gives us and try to reduce it by 50%. We will then reach the ‘actual’ price. However, I’ll tell you exactly why that doesn’t work.
             </p>
             
          </div>
      </div>
    </>
  );
};

export default News;
