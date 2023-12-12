import Image from "next/image";

const PortfolioItem = ({portfolio}) => {

  const {title,thumbnail,liveLink} = portfolio

  return (
    <div class="relative mb-12 shadow-md border border-primary rounded-md ">
      <div class="overflow-hidden h-72 rounded-[10px]">
        <Image
          src={thumbnail}
          width={500}
          height={500}
          alt="portfolio"
          class="w-full h-full object-contain "
        />
      </div>
      <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
        <span class="text-primary mb-2 block text-sm font-medium">
          Marketing
        </span>
        <h3 class="text-dark capitalize text-secondary mb-5 text-xl font-bold">
         {title}
        </h3>
        <a
          href={liveLink}
          target="_blank"
          class="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
