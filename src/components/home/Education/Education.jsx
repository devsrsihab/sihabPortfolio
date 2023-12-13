import Container from "@/components/Shared/Container";
import SecitonTitle from "@/components/Shared/SecitonTitle";

const Education = () => {
  return (
    <>
    <div >
      <Container>
        <SecitonTitle
          className="text-white"
          firstText="My"
          secondText="Education"
        />
        <section id="education" className="bg-gray-800  px-4">
          <section className="items-center py-24 font-poppins dark:">
            <div className="justify-center w-full sm:max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
              <div className="w-full sm:max-w-xl mx-auto"></div>
              <div className="w-full mx-auto lg:max-w-3xl">
                {/* ssc */}
                <div className="relative sm:flex justify-between">
                  <div className="hidden md:flex flex-col items-center w-10 mr-4 md:w-24">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                        <div className="w-4 h-4  rounded-full bg-blue-400" />
                      </div>
                    </div>
                    <div className="w-px h-full bg-blue-300 dark:bg-gray-600" />
                  </div>
                  <div>
                    <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl dark:text-gray-100">
                      2015-2017
                    </h2>
                    <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                      <div className="relative z-20 p-6">
                        <p className="mb-2 text-xl uppercase font-bold text-white">
                          ssc
                        </p>
                        <p className="text-gray-700 dark:text-gray-500">
                          Completed from Konabari M.A. Kuddus High School in
                          kuddusnagar,Konabari,Gazipur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* hsc */}
                <div className="relative sm:flex justify-between">
                  <div className="hidden md:flex flex-col items-center w-10 mr-4 md:w-24">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                        <div className="w-4 h-4  rounded-full bg-blue-400" />
                      </div>
                    </div>
                    <div className="w-px h-full bg-blue-300 dark:bg-gray-600" />
                  </div>
                  <div>
                    <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl dark:text-gray-100">
                      2018-2020
                    </h2>
                    <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                      <div className="relative z-20 p-6">
                        <p className="mb-2 text-xl uppercase font-bold text-white">
                          hsc
                        </p>
                        <p className="text-gray-700 dark:text-gray-500">
                          Completed from Bilchalan Shahid Shamsuzzoha Govt.
                          College in Gurudaspur,Natore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* hons */}
                <div className="relative sm:flex justify-between">
                  <div className="hidden md:flex flex-col items-center w-10 mr-4 md:w-24">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                        <div className="w-4 h-4  rounded-full bg-blue-400" />
                      </div>
                    </div>
                    <div className="w-px h-full bg-blue-300 dark:bg-gray-600" />
                  </div>
                  <div>
                    <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl dark:text-gray-100">
                      2020-Current
                    </h2>
                    <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                      <div className="relative z-20 p-6">
                        <p className="mb-2 text-xl font-bold text-white">
                          Hons - 3rd Year
                        </p>
                        <p className="text-gray-700 dark:text-gray-500">
                          Currently enrolled in Rajshahi college pursuing a
                          Bachelor degree in Division City of Rajshahi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Container>
      </div>
    </>
  );
};

export default Education;
