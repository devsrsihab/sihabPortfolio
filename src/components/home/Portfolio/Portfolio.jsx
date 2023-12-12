import Container from "../../Shared/Container";
import SecitonTitle from "../../Shared/SecitonTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container>
        <SecitonTitle firstText="My" secondText="Portfolio" />
        {/* items */}
        <div className="grid grid-cols-3 gap-6 ">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
