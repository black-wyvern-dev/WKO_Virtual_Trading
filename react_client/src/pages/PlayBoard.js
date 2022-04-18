import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

import BalanceBar from 'src/components/playboard/BalanceBar';
import BoardBar from 'src/components/playboard/BoardBar';
import CreditPane from 'src/components/playboard/CreditPane';
import GamePane from 'src/components/playboard/GamePane';
import SalesPane from 'src/components/playboard/SalesPane';
import TradeHistoryPane from 'src/components/playboard/TradeHistoryPane';
import TradePane from 'src/components/playboard/TradePane';
// import CCButton from 'src/components/elements/CCButton';

const Playboard = () => {
  const [showCreditPane, setShowCreditPane] = useState(false);
  // const [tradingBalance, setTradingBalance] = useState(0);
  const [premiumBalance, setPremiumBalance] = useState(217.15);
  const [curGameMode, setCurGameMode] = useState('pre-game');

  const handleCreditPaneToggle = (oldShowState) => {
    setShowCreditPane(!oldShowState);
  };

  const handlePremiumBalanceChanged = (newAmount) => {
    setPremiumBalance(newAmount);
  };

  const handleCountrySelected = (code) => {
    console.log(code);
  };

  return (
    <>
      <Helmet>
        <title>Settings | Material Kit</title>
      </Helmet>
      <Box
        sx={{
        }}
      >
        <Container maxWidth="lg">
          <Container
            style={{
              marginTop: '150px',
              marginBottom: '80px',
              padding: '0 100px',
            }}
          >
            <BalanceBar
              balanceAmount={premiumBalance}
            />
            <TradeHistoryPane />
          </Container>
          {
            showCreditPane ?
              <CreditPane
                premiumBalance={premiumBalance}
                onPremiumBalanceChaged={handlePremiumBalanceChanged}
              />
              :
              <></>
          }
          <BoardBar
            onCreditPaneToggle={handleCreditPaneToggle}
          />
          <Box 
            sx={{
              backgroundColor: 'background.secondary',
              minHeight: '100%',
              py: 3,
              my: 1,
              border: '1px solid white',
              borderColor: 'border.lightgray',
            }}
          >
            <SalesPane />
            <TradePane />
            <GamePane
              onSelected={handleCountrySelected}
            />
          </Box>
        </Container>
      </Box>
    </>
)};

export default Playboard;
