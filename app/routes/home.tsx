import { useState } from "react";
import AlternateTimeline from "~/components/timetable";

const faq = [
  { q: "What should I wear?", a: "For day guests, wedding attire is recommended. Evening guests, dress how you'd like. Remember sensible footwear and as the wedding is outside bring a warm coat for the evening. " },
  { q: "Can I bring my own booze?", a: "Yes, absolutely!" },
  { q: "Can I bring a plus-one?", a: "Please check your invitation; only guests listed are invited." },
  { q: "Are children allowed?", a: "We're sorry but this is a child-free wedding." },
  { q: "What time does the ceremony start?", a: "The ceremony starts at 1PM." },
  { q: "What if I have food allergies?", a: "Please let us know in your RSVP." },
  { q: "Will there be vegetarian or vegan options?", a: "Yes, vegan and veggie options will be available. Please specify in your RSVP." },
  { q: "Who do I contact for questions?", a: "You can reach out to us via the contact info on your invite." },
  { q: "What about Gifts?", a: "There will be a table if you'd like to bring a gift, but your presence is the best gift!" },
  { q: "Can I Bring my USB?", a: "Yes, no psy-trance." }
];

export default function Home() {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faq.length).fill(false));

  const toggleOpen = (idx: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === idx ? !state : state))
    );
  };

  return (
    <main className="pt-16">
      {/* Home / Welcome */}
      <section
        id="home"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full relative flex items-center justify-center px-6 sm:px-8 py-8 bg-[#e5decc] "
      >
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 drop-shadow-lg">
            Robyn & Danny's Wedding
          </h1>
          <p className="text-3xl md:text-4xl mb-1 drop-shadow-md">Saturday 13th June 2026</p>
          <p className="text-2xl md:text-3xl drop-shadow-md">Hexham</p>
        </div>
      </section>

      {/* Schedule / Timeline */}
      <section
        id="schedule"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8"
      >
        <h2 className="text-5xl font-semibold mb-6">Schedule</h2>
        <div className="w-full max-w-5xl">
         <p className="text-2xl">
          12:30pm - Guests begin to arrive at Hexham House Registry Office for the ceremony.<br />
          1pm: Ceremony begins.<br />
          2pm: Please make your way to the reception at the Farm after photos at Hexham House.<br />
          3pm: Food, followed by speeches.<br />
          5pm: The decks are out and music begins!<br />
          6pm: Evening guests arrive.<br />
          7pm: First Skank!<br />
          8:00-9:30pm: Evening food available.
         </p>
        </div>
      </section>

      {/* Travel */}
      <section
        id="travel"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full bg-[#e5decc]  flex flex-col items-center justify-center px-6 sm:px-8 py-8"
      >
        <h2 className="text-5xl font-semibold mb-6 text-center">Travel</h2>
        <div className="max-w-3xl w-full flex flex-col justify-center space-y-8 text-xl md:text-2xl text-center">
             <p>
              There is no public transport to the reception at the Farm. The distance between Hexham
              and the farm is approximately 10 miles or 20 minutes drive. 
            </p>
          <div className="space-y-2">
            <h3 className="text-3xl font-medium">Getting to the Ceremony (Full-day guests)</h3>
            <p>
              The wedding ceremony will take place at 
              <a
                href="https://goo.gl/maps/example-hexham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              > Hexham Registry Office</a>. 
              Guests can drive here, but note there is no onsite parking. There are several public car parks nearby.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-medium">Ceremony to the Farm (Full-day guests)</h3>
            <p>
              After the ceremony, the celebration continues at the farm (NE47 0JD).  
              Cars can be driven to the farm, and there are plenty of parking spaces.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-medium">Heading to the Farm (Evening guests)</h3>
            <p>
              Guests joining only for the evening can head directly to the farm (NE47 0JD).  
              There is plenty of parking available for cars.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-medium">Train and Taxi Information</h3>
            <p>
              The nearest train station is <strong>Hexham Station</strong>.  
              Getting taxis from the station can sometimes be tricky, and will need to be booked in advance.  
              We recommend contacting local taxi services to arrange your ride to the farm, such as: <br></br> <strong>Ecocabs</strong> (01434 600600)
              <br></br> <strong>Advance Taxis</strong> (01434 606565)
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section
        id="accommodation"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8"
      >
        <h2 className="text-5xl font-semibold mb-6">Accommodation</h2>
        <div className="max-w-xl text-xl md:text-2xl space-y-4 text-center">
          <p>
            At the farm, there are <strong>Bell-tents</strong> available to rent for guests which can be booked directly. 
            There are multiple options from basic to more luxurious setups to suit your budget. 
            You can find additional information and book them here <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">here</a>.
          </p>
          <p>Guests are also welcome to bring <strong>campervans</strong> or <strong>tents</strong> if they wish. There will be a designated area for all the campers!</p>
          <p>There are also options for Hotels in Hexham, including:</p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li><strong>The Beaumont Hotel:</strong> .</li>
            <li><strong>Hexham Travelodge:</strong> .</li>
            <li><strong>Hexham Holiday Homes:</strong> Local holiday homes for a comfortable stay.</li>
          </ul>
          
        </div>
      </section>

      {/* Important Information */}
      <section
        id="important-info"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full bg-[#e5decc] flex flex-col items-center justify-center px-6 sm:px-8 py-8"
      >
        <h2 className="text-5xl font-semibold mb-8">Important Information (Please read) </h2>
        <div className="flex flex-col gap-6 w-full max-w-xl text-xl md:text-2xl">
          {[
            "We are operating an at-cost cash bar, there is NO option for card payments so please BRING CASH! You can BYOB if you wish.",
            "RSVP by 1st May 2026 to confirm your attendance.",
            "The wedding is in a field; please wear appropriate footwear (No stilettos!).",
            "We're sorry but this is a child-free wedding.",
            "Vegetarian and vegan options are available; specify in RSVP."
          ].map((fact, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-xl md:text-2xl text-gray-800">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A */}
      <section
        id="q-and-a"
        className="flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8"
      >
        <h2 className="text-5xl font-semibold mb-8">Q & A</h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-2xl">
          {faq.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center text-xl md:text-2xl"
              >
                <span className="font-medium">{item.q}</span>
                <span>{openStates[idx] ? "−" : "+"}</span>
              </button>
              {openStates[idx] && (
                <div className="px-4 py-3 bg-gray-50 text-xl md:text-2xl">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
