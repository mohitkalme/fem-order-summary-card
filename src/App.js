import "./css/App.css";
import hero from "./images/illustration-hero.svg";
import musicIcon from "./images/icon-music.svg";
function App() {
  return (
    <div className="bg-svg bg-pale-blue flex  h-screen">
      <div className="max-w-md sm:m-auto rounded-2xl overflow-hidden  shadow-lg shadow-pale-blue-900/90 mx-6 my-auto">
        <img src={hero} alt="hero backgroung" />
        <div className="bg-very-pale-blue p-6 md:px-12 md:py-9">
          <div className="text-center px-3 sm:px-7">
            <h2 className="font-black text-2xl text-dark-blue">
              Order Summary
            </h2>
            <p className="text-desaturated-blue leading-[1.7125rem]  mb-6 mt-[1.2rem]">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="p-5 flex  bg-price-tag rounded-lg">
            <img src={musicIcon} className="w-12 h-12" alt="music icon" />
            <div className="pl-4 flex-1">
              <h4 className="text-dark-blue font-bold">Annual Plan</h4>
              <p className="text-desaturated-blue text-sm">$55.99/year</p>
            </div>
            <div className="text-center flex items-center">

            <p className="text-bright-blue hover:opacity-75 underline hover:no-underline cursor-pointer">Change</p>
            </div>
          </div>

          <a href="github.com/mohitkalme" target="_blank" className="bg-bright-blue  shadow-xl shadow-dark-blue-blue-500 font-bold hover:opacity-75 py-4 text-very-pale-blue w-full rounded-xl my-8 inline-block text-center">Proceed to Payment</a>
          <p className="cursor-pointer font-bold text-desaturated-blue text-center hover:text-dark-blue p-0 m-0">Cancel Order</p>
        </div>
      </div>
    </div>
  );
}

export default App;