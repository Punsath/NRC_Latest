import hero from "./../../assets/images/aboutus/free.png";


export const OurTeam = () => {
  return (
    <>
      <section className="relative w-full md:h-[600px] flex flex-col items-center justify-center  md:mt-[150px]">
        {/* Overlay */}
        <div className="absolute inset-0 opacity-50 z-10"></div>

        {/* Background Image */}
        <img src={hero} className="w-full h-[600px] object-cover" alt="" />

        {/* Content */}
        <div className="absolute z-20 flex flex-col items-center justify-center px-4 text-center">
          <div className="font-Montserrat font-normal text-[24px] md:text-[40px] text-[#004066]">
            Who We Are ?
          </div>
          <div className="font-nunito font-normal text-[12px] md:text-[16px] text-[#1E1E1E] w-full md:w-[60%] mt-4 md:mt-8 leading-[22px] md:leading-[40px]">
          Negombo Recycling Club (NRC) is all about building long-lasting relationships with our stakeholders including collectors & waste pickers, suppliers, customers, employees, partners while investing in the communities where we operate in order to transform the waste and recycling industry to a value driven industry.
           We are proud to provide environmental, social and financial services to the citizens and families in the areas we serve.  In NRC services, we fulfill the solid waste removal and recycling needs of over one million residential and industrial partners in more than 20 towns and municipalities across the NEGOMBO region, with over 150 exclusive contracts. We consider it is a privilege to work hand-in-hand with our stakeholders to create a better recycling model with unique features in order to improve the regional waste recovery rates which is our primary objective. Our highly decentralized corporate structure creates the accessibility to each and every collection point on-time basis and supports the regional recycling system to grow the waste recovery rates rapidly.The heart of the NRC operations is the traceability of the raw material supply for the global recycling industry which leads the economy through a meaningful value addition to support the GDP.
          </div>
          
          


         
        </div>
      </section>
    </>
  );
};
