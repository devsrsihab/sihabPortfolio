const PortfolioItem = () => {
  return (
    <div class="relative mb-12">
      <div class="overflow-hidden rounded-[10px]">
        <img
          src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-05.jpg"
          alt="portfolio"
          class="w-full"
        />
      </div>
      <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
        <span class="text-primary mb-2 block text-sm font-medium">
          Marketing
        </span>
        <h3 class="text-dark text-secondary mb-5 text-xl font-bold">
          Digital marketing
        </h3>
        <a
          href="javascript:void(0)"
          class="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
