import React, { createContext, useContext, useState } from "react";

const DetailsContext = createContext();

export default function DetailsProvider({ children }) {
  const [Teamid, setTeamId] = useState("");
  const [Portfolioitem, setPortfolioitem] = useState("");
  const [status, setStatus] = useState("");
  const [match, setMatch] = useState(false);

  return (
    <DetailsContext.Provider
      value={{
        Teamid,
        Portfolioitem,
        setTeamId,
        setPortfolioitem,
        status,
        setStatus,
        match,
        setMatch,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

export const useDetails = () => {
  return useContext(DetailsContext);
};
