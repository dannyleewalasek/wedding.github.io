import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 64;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: "w-full flex items-center justify-between p-4 bg-white shadow-sm fixed top-0 left-0 z-50", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Danny & Robyns Wedding" }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex gap-6 text-base", children: ["home", "schedule", "travel", "accommodation", "important-info", "q-and-a"].map((id) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleScroll(id),
        className: "hover:opacity-70 transition-opacity",
        children: id === "q-and-a" ? "Q & A" : id === "important-info" ? "Important Info" : id.charAt(0).toUpperCase() + id.slice(1)
      },
      id
    )) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "md:hidden p-3 bg-white rounded-full shadow hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none",
        onClick: () => setOpen(!open),
        children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "☰" })
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-4 mt-2 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden z-50", children: ["home", "schedule", "travel", "accommodation", "important-info", "q-and-a"].map((id) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleScroll(id),
        className: "text-left hover:opacity-70 transition-opacity",
        children: id === "q-and-a" ? "Q & A" : id.charAt(0).toUpperCase() + id.slice(1)
      },
      id
    )) })
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "bg-white text-gray-800",
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Outlet, {})]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const faq = [{
  q: "What should I wear?",
  a: "For day guests, wedding attire is recommended. Evening guests, dress how you'd like. Remember sensible footwear and as the wedding is outside bring a warm coat for the evening. "
}, {
  q: "Can I bring my own booze?",
  a: "Yes, absolutely!"
}, {
  q: "Can I bring a plus-one?",
  a: "Please check your invitation; only guests listed are invited."
}, {
  q: "Are children allowed?",
  a: "We're sorry but this is a child-free wedding."
}, {
  q: "What time does the ceremony start?",
  a: "The ceremony starts at 1PM."
}, {
  q: "What if I have food allergies?",
  a: "Please let us know in your RSVP."
}, {
  q: "Will there be vegetarian or vegan options?",
  a: "Yes, vegan and veggie options will be available. Please specify in your RSVP."
}, {
  q: "Who do I contact for questions?",
  a: "You can reach out to us via the contact info on your invite."
}, {
  q: "What about Gifts?",
  a: "There will be a table if you'd like to bring a gift, but your presence is the best gift!"
}, {
  q: "Can I Bring my USB?",
  a: "Yes, no psy-trance."
}];
const home = UNSAFE_withComponentProps(function Home() {
  const [openStates, setOpenStates] = useState(Array(faq.length).fill(false));
  const toggleOpen = (idx) => {
    setOpenStates((prev) => prev.map((state, i) => i === idx ? !state : state));
  };
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16",
    children: [/* @__PURE__ */ jsx("section", {
      id: "home",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full relative flex items-center justify-center px-6 sm:px-8 py-8 bg-[#e5decc] ",
      children: /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 flex flex-col items-center text-center text-white px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-6xl md:text-8xl font-bold mb-2 drop-shadow-lg",
          children: "Robyn & Danny's Wedding"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-3xl md:text-4xl mb-1 drop-shadow-md",
          children: "Saturday 13th June 2026"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-2xl md:text-3xl drop-shadow-md",
          children: "Hexham"
        })]
      })
    }), /* @__PURE__ */ jsxs("section", {
      id: "schedule",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-5xl font-semibold mb-6",
        children: "Schedule"
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full max-w-5xl",
        children: /* @__PURE__ */ jsxs("p", {
          className: "text-2xl",
          children: ["12:30pm - Guests begin to arrive at Hexham House Registry Office for the ceremony.", /* @__PURE__ */ jsx("br", {}), "1pm: Ceremony begins.", /* @__PURE__ */ jsx("br", {}), "2pm: Please make your way to the reception at the Farm after photos at Hexham House.", /* @__PURE__ */ jsx("br", {}), "3pm: Food, followed by speeches.", /* @__PURE__ */ jsx("br", {}), "5pm: The decks are out and music begins!", /* @__PURE__ */ jsx("br", {}), "6pm: Evening guests arrive.", /* @__PURE__ */ jsx("br", {}), "7pm: First Skank!", /* @__PURE__ */ jsx("br", {}), "8:00-9:30pm: Evening food available."]
        })
      })]
    }), /* @__PURE__ */ jsxs("section", {
      id: "travel",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full bg-[#e5decc]  flex flex-col items-center justify-center px-6 sm:px-8 py-8",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-5xl font-semibold mb-6 text-center",
        children: "Travel"
      }), /* @__PURE__ */ jsxs("div", {
        className: "max-w-3xl w-full flex flex-col justify-center space-y-8 text-xl md:text-2xl text-center",
        children: [/* @__PURE__ */ jsx("p", {
          children: "There is no public transport to the reception at the Farm. The distance between Hexham and the farm is approximately 10 miles or 20 minutes drive."
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-2",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-3xl font-medium",
            children: "Getting to the Ceremony (Full-day guests)"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["The wedding ceremony will take place at", /* @__PURE__ */ jsx("a", {
              href: "https://goo.gl/maps/example-hexham",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 underline",
              children: " Hexham Registry Office"
            }), ". Guests can drive here, but note there is no onsite parking. There are several public car parks nearby."]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-2",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-3xl font-medium",
            children: "Ceremony to the Farm (Full-day guests)"
          }), /* @__PURE__ */ jsx("p", {
            children: "After the ceremony, the celebration continues at the farm (NE47 0JD). Cars can be driven to the farm, and there are plenty of parking spaces."
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-2",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-3xl font-medium",
            children: "Heading to the Farm (Evening guests)"
          }), /* @__PURE__ */ jsx("p", {
            children: "Guests joining only for the evening can head directly to the farm (NE47 0JD). There is plenty of parking available for cars."
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-2",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-3xl font-medium",
            children: "Train and Taxi Information"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["The nearest train station is ", /* @__PURE__ */ jsx("strong", {
              children: "Hexham Station"
            }), ". Getting taxis from the station can sometimes be tricky, and will need to be booked in advance. We recommend contacting local taxi services to arrange your ride to the farm, such as: ", /* @__PURE__ */ jsx("br", {}), " ", /* @__PURE__ */ jsx("strong", {
              children: "Ecocabs"
            }), " (01434 600600)", /* @__PURE__ */ jsx("br", {}), " ", /* @__PURE__ */ jsx("strong", {
              children: "Advance Taxis"
            }), " (01434 606565)"]
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("section", {
      id: "accommodation",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-5xl font-semibold mb-6",
        children: "Accommodation"
      }), /* @__PURE__ */ jsxs("div", {
        className: "max-w-xl text-xl md:text-2xl space-y-4 text-center",
        children: [/* @__PURE__ */ jsxs("p", {
          children: ["At the farm, there are ", /* @__PURE__ */ jsx("strong", {
            children: "Bell-tents"
          }), " available to rent for guests which can be booked directly. There are multiple options from basic to more luxurious setups to suit your budget. You can find additional information and book them here ", /* @__PURE__ */ jsx("a", {
            href: "https://example.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 underline",
            children: "here"
          }), "."]
        }), /* @__PURE__ */ jsxs("p", {
          children: ["Guests are also welcome to bring ", /* @__PURE__ */ jsx("strong", {
            children: "campervans"
          }), " or ", /* @__PURE__ */ jsx("strong", {
            children: "tents"
          }), " if they wish. There will be a designated area for all the campers!"]
        }), /* @__PURE__ */ jsx("p", {
          children: "There are also options for Hotels in Hexham, including:"
        }), /* @__PURE__ */ jsxs("ul", {
          className: "list-disc list-inside space-y-2 text-left",
          children: [/* @__PURE__ */ jsxs("li", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "The Beaumont Hotel:"
            }), " ."]
          }), /* @__PURE__ */ jsxs("li", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Hexham Travelodge:"
            }), " ."]
          }), /* @__PURE__ */ jsxs("li", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Hexham Holiday Homes:"
            }), " Local holiday homes for a comfortable stay."]
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("section", {
      id: "important-info",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full bg-[#e5decc] flex flex-col items-center justify-center px-6 sm:px-8 py-8",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-5xl font-semibold mb-8",
        children: "Important Information (Please read) "
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-col gap-6 w-full max-w-xl text-xl md:text-2xl",
        children: ["We are operating an at-cost cash bar, there is NO option for card payments so please BRING CASH! You can BYOB if you wish.", "RSVP by 1st May 2026 to confirm your attendance.", "The wedding is in a field; please wear appropriate footwear (No stilettos!).", "We're sorry but this is a child-free wedding.", "Vegetarian and vegan options are available; specify in RSVP."].map((fact, idx) => /* @__PURE__ */ jsx("div", {
          className: "bg-gray-50 p-4 rounded-lg shadow-sm",
          children: /* @__PURE__ */ jsx("p", {
            className: "text-xl md:text-2xl text-gray-800",
            children: fact
          })
        }, idx))
      })]
    }), /* @__PURE__ */ jsxs("section", {
      id: "q-and-a",
      className: "flex-1 min-h-[calc(100vh-4rem)] w-full bg-gray-100 flex flex-col items-center justify-center px-6 sm:px-8 py-8",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-5xl font-semibold mb-8",
        children: "Q & A"
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-2xl",
        children: faq.map((item, idx) => /* @__PURE__ */ jsxs("div", {
          className: "border border-gray-300 rounded-lg overflow-hidden",
          children: [/* @__PURE__ */ jsxs("button", {
            onClick: () => toggleOpen(idx),
            className: "w-full text-left px-4 py-3 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center text-xl md:text-2xl",
            children: [/* @__PURE__ */ jsx("span", {
              className: "font-medium",
              children: item.q
            }), /* @__PURE__ */ jsx("span", {
              children: openStates[idx] ? "−" : "+"
            })]
          }), openStates[idx] && /* @__PURE__ */ jsx("div", {
            className: "px-4 py-3 bg-gray-50 text-xl md:text-2xl",
            children: item.a
          })]
        }, idx))
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-a9GItLxr.js", "imports": ["/assets/chunk-WWGJGFF6-CY6583Oj.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/root-Um2XFIUk.js", "imports": ["/assets/chunk-WWGJGFF6-CY6583Oj.js"], "css": ["/assets/root-DAvFCuic.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Dil1JNPq.js", "imports": ["/assets/chunk-WWGJGFF6-CY6583Oj.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-9231a247.js", "version": "9231a247", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
