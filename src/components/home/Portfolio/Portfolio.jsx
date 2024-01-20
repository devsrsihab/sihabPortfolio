import { getAllPortflio } from "@/src/utils/getPortfolio";
import Container from "../../Shared/Container";
import SecitonTitle from "../../Shared/SecitonTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = async () => {
  // portoflio data
  const portfolios = await getAllPortflio()



  return (
    <div id="portfolio">
      <Container>
        <SecitonTitle firstText="My" secondText="Portfolio" />
        {/* items */}
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
              portfolios?.map((portfolio,index) => (
                <PortfolioItem key={index} portfolio={portfolio} />

              ))
          }

        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
