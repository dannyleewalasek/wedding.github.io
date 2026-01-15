import { useState } from "react";

const faq = [
  { q: "What should I wear?", a: "For day guests, wedding attire is recommended. Evening guests, dress how you'd like. Remember sensible footwear and as the wedding is outside bring a warm coat for the evening. " },
  { q: "Can I bring my own booze?", a: "Yes, absolutely!" },
  { q: "Can I bring a plus-one?", a: "Please check your invitation; only guests listed are invited." },
  { q: "Are children allowed?", a: "We're sorry but this is a child-free wedding." },
  { q: "What if I have food allergies?", a: "Please let us know in your RSVP." },
  { q: "Will there be vegetarian or vegan options?", a: "Yes, vegan and veggie options will be available. Please specify in your RSVP." },
  { q: "Who do I contact for questions?", a: "You can reach out to us via the contact info on your invite." },
  { q: "What about Gifts?", a: "There will be a table if you'd like to bring a card or gift, but your presence is the best gift!" },
  { q: "Can I Bring my USB?", a: "Yes, no psy-trance." },
];

function App() {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faq.length).fill(false));

  const toggleOpen = (idx: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === idx ? !state : state))
    );
  };

  return (
    <main className="pt-16 font-sans text-gray-800">
      {/* Home / Welcome */}
      <section
        id="home"
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12 bg-[#e5decc]"
      >
        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-wide drop-shadow-sm">
            Robyn & Danny's Wedding
          </h1>
          <p className="text-2xl md:text-3xl font-light">
            Saturday 13th June 2026
          </p>
          <p className="text-xl md:text-2xl font-light">
            Hexham
          </p>
          <p className="text-xl md:text-2xl font-light">
            To RSVP please text contact Danny or Robyn!
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section
        id="schedule"
        className="min-h-[calc(100vh-4rem)] bg-gray-100 flex flex-col items-center justify-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-wide">
          Schedule
        </h2>
        <p>
         We are sorry but due very limited capacity at the Hexham House registry office only family and our wedding ceremony and attend the ceremony.<br></br>
         For our friends attending the daytime celebrtions please arrive at the farm from 2pm no later than 3pm ready for food and speeches.
        </p>
        <div className="max-w-4xl text-lg md:text-xl leading-relaxed text-center">
          <p>
            12:30pm - Guests begin to arrive at Hexham House Registry Office for the ceremony.<br />
            1pm: Ceremony begins.<br />
            2pm: Please make your way to the reception at the Farm after photos at Hexham House.<br />
            3pm: Food, followed by speeches.<br />
            5pm: The decks are out and music begins!<br />
            6pm: Evening guests arrive.<br />
            7pm: First Skank!<br />
            8:00-9:30pm: Pizza van for evening food.
            9:30-Late: Dancing and music.
          </p>
        </div>
      </section>

      {/* Travel */}
      <section
        id="travel"
        className="min-h-[calc(100vh-4rem)] bg-[#e5decc] flex flex-col items-center justify-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center">
          Travel
        </h2>

        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl leading-relaxed">
          <div className="space-y-8">
            <p>
              There is no public transport to the reception at the Farm. The distance between Hexham
              and the farm is approximately 10 miles or 20 minutes drive.
            </p>

            <div>
              <h3 className="text-2xl font-medium mb-2">
                Getting to the Ceremony (family & wedding party)
              </h3>
              <p>
                The wedding ceremony will take place at
                <a
                  href="https://goo.gl/maps/example-hexham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline ml-1"
                >
                  Hexham Registry Office
                </a>.
                Guests can drive here, but note there is no onsite parking. There are several public car parks nearby.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-2">
                Travelling to the Farm 
              </h3>
              <p>
                Celebrations continue at the farm (NE47 0JD).
                Cars can be driven to the farm, and there are plenty of parking spaces.
                Getting taxis from Hexham town centre to the farm can sometimes be tricky, and will need to be booked in advance.
              </p>
            </div>

           -<div>
              <h3 className="text-2xl font-medium mb-2">
                Leaving the Farm 
              </h3>
              <p>
                If you're not staying at the farm in a van, bell-tent, or tent, you will need to arrange travel back to hexham in advance, taxis cannot be booked last minute and there's very poor phone signal on the farm.
              </p>
            </div>
          </div>

          <div className="space-y-8">


            <div>
              <h3 className="text-2xl font-medium mb-2">
                Train and Taxi Information
              </h3>
              <p>
                The nearest train station is <strong>Hexham Station</strong>.
                Getting taxis from the station can sometimes be tricky, and will need to be booked in advance.
                We recommend contacting local taxi services such as:
                <br />
                <strong>Ecocabs</strong> (01434 600600)
                <br />
                <strong>Advance Taxis</strong> (01434 606565)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section
        id="accommodation"
        className="min-h-[calc(100vh-4rem)] bg-gray-100 flex flex-col items-center justify-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          Accommodation
        </h2>
        <div className="max-w-xl text-lg md:text-xl leading-relaxed space-y-6 text-center">
          <p>
            At the farm, there are <strong>Bell-tents</strong> available to rent for guests which can be booked directly.
            There are multiple options from basic to more luxurious setups to suit your budget.
            You can find additional information and book them
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-1">
              here
            </a>.
          </p>
          <p>
            Guests are also welcome to bring <strong>campervans</strong> or <strong>tents</strong> if they wish.
            There will be a designated area for all the campers!
          </p>
          <p>There are also options for Hotels in Hexham, including:</p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li><strong>The Beaumont Hotel:</strong> .</li>
            <li><strong>Hexham Travelodge:</strong> .</li>
            <li><strong>Hexham Holiday Homes:</strong> Local holiday homes for a comfortable stay.</li>
          </ul>
        </div>
      </section>

      {/* Important Info */}
      <section
        id="important-info"
        className="min-h-[calc(100vh-4rem)] bg-[#e5decc] flex flex-col items-center justify-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center">
          Important Information (Please read)
        </h2>
        <div className="max-w-xl space-y-5 text-lg md:text-xl">
          {[
            "We are operating an at-cost cash bar, there is NO option for card payments so please BRING CASH! You can BYOB if you wish.",
            "RSVP by 1st April 2026 to confirm your attendance.",
            "The wedding reception is in a field; please wear appropriate footwear (No stilettos!).",
            "We're sorry but this is a child-free wedding.",
            "Vegetarian and vegan options are available; specify in RSVP."
          ].map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm">
              {fact}
            </div>
          ))}
        </div>
      </section>

      {/* Q&A */}
      <section
        id="q-and-a"
        className="min-h-[calc(100vh-4rem)] bg-gray-100 flex flex-col items-center justify-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Q & A
        </h2>
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl">
          {faq.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-2xl">{openStates[idx] ? "−" : "+"}</span>
              </button>
              {openStates[idx] && (
                <div className="px-5 py-4 bg-gray-50 leading-relaxed">
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

export default App;
