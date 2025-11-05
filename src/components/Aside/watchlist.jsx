import { useEffect, useState } from "react";
import HighlightTabs from "../tabs/highlightTabs";
import ListCard from "./listcard";
const subTabs = [
  {
    name: "Bluest of blues",
    key: "blues",
  },
  {
    name: "Bluest of greens",
    key: "whites",
  },
  {
    name: "The Undertakers",
    key: "deadmans",
  },
  {
    name: "Undervalued companies",
    key: "undervalued",
  },

  {
    name: "Yowieee Wowiee",
    key: "wyatt",
  },
];
const scrips = [
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "5258",
    tradingSymbol: "INDUSINDBK-EQ",
    expiry: "",
    sortOrder: 1,
    pdc: "782.45",
    symbol: "INDUSINDBK",
    formattedInsName: "INDUSINDBK-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "14977",
    tradingSymbol: "POWERGRID-EQ",
    expiry: "",
    sortOrder: 4,
    pdc: "284.85",
    symbol: "POWERGRID",
    formattedInsName: "POWERGRID-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "15083",
    tradingSymbol: "ADANIPORTS-EQ",
    expiry: "",
    sortOrder: 5,
    pdc: "1325",
    symbol: "ADANIPORTS",
    formattedInsName: "ADANIPORTS-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "16675",
    tradingSymbol: "BAJAJFINSV-EQ",
    expiry: "",
    sortOrder: 6,
    pdc: "1919.2",
    symbol: "BAJAJFINSV",
    formattedInsName: "BAJAJFINSV-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "3456",
    tradingSymbol: "TATAMOTORS-EQ",
    expiry: "",
    sortOrder: 7,
    pdc: "633.7",
    symbol: "TATAMOTORS",
    formattedInsName: "TATAMOTORS-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "10999",
    tradingSymbol: "MARUTI-EQ",
    expiry: "",
    sortOrder: 8,
    pdc: "12590",
    symbol: "MARUTI",
    formattedInsName: "MARUTI-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "11287",
    tradingSymbol: "UPL-EQ",
    expiry: "",
    sortOrder: 10,
    pdc: "688.75",
    symbol: "UPL",
    formattedInsName: "UPL-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "17818",
    tradingSymbol: "LTIM-EQ",
    expiry: "",
    sortOrder: 11,
    pdc: "5012",
    symbol: "LTIM",
    formattedInsName: "LTIM-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "MCX",
    segment: "mcx_fo",
    token: "457886",
    tradingSymbol: "CRUDEOIL19NOV25",
    expiry: "2025-11-19",
    sortOrder: 13,
    pdc: "5422",
    symbol: "CRUDEOIL",
    formattedInsName: "CRUDEOIL 19th NOV FUT",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NFO",
    segment: "nse_fo",
    token: "37051",
    tradingSymbol: "BANKNIFTY25NOV25F",
    expiry: "2025-11-25",
    sortOrder: 14,
    pdc: "58184.6",
    symbol: "BANKNIFTY",
    formattedInsName: "BANKNIFTY 25th NOV FUT",
    weekTag: "M",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "NSE",
    segment: "nse_cm",
    token: "3045",
    tradingSymbol: "SBIN-EQ",
    expiry: "",
    sortOrder: 15,
    pdc: "957.6",
    symbol: "SBIN",
    formattedInsName: "SBIN-EQ",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
  {
    exchange: "BSE",
    segment: "bse_cm",
    token: "500112",
    tradingSymbol: "SBIN",
    expiry: "",
    sortOrder: 16,
    pdc: "957.05",
    symbol: "SBIN",
    formattedInsName: "SBIN",
    weekTag: "",
    badge: {
      bnpl: "",
      event: false,
      holdingqty: "0",
      ideas: "",
    },
    screeners: [],
  },
];
import { useGetWatchlist } from "../../tanstackDataManager/watchData";
import { useDispatch } from "react-redux";
import { setWatchlistData } from "../../store/watchStore";
export default function Watchlist() {
  const [activeSecondaryTab, setActiveSecondaryTab] = useState("blues");
  const handleSecondaryClick = (element) => {
    const scrollElement = document.getElementById(
      `${element.name}_highlight_button`
    );
    if (scrollElement) {
      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    setActiveSecondaryTab(element.key);
  };
  const dispatch = useDispatch();
  const { isSuccess, data } = useGetWatchlist();
  console.log("jj");
  // useEffect(() => {
  //   // refetch();
  // }, [refetch]);
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setWatchlistData(data));
    }
  }, [isSuccess, data, dispatch]);
  return (
    <div className='flex-1 min-h-0 flex flex-col'>
      <h1 className='mx-4 text-sm text-primaryText font-medium pt-2'>
        Recommended for you
      </h1>
      <div className='mx-4 mt-3 mb-2'>
        <HighlightTabs
          tabs={subTabs}
          activeTab={activeSecondaryTab}
          setActiveTab={handleSecondaryClick}
        />
      </div>
      <div className='flex-1 min-h-0 mb-[60px]'>
        <div className='h-full overflow-auto scroll-container'>
          {scrips.map((el) => {
            return (
              <ListCard key={`${el.token}|${el.exchange}`} scripData={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
