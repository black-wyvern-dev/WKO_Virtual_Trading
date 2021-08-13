import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

import BalanceBar from 'src/components/playboard/BalanceBar';
import BoardBar from 'src/components/playboard/BoardBar';
import CreditPane from 'src/components/playboard/CreditPane';
import GamePane from 'src/components/playboard/GamePane';
import SalesPane from 'src/components/playboard/SalesPane';
import TradeHistoryPane from 'src/components/playboard/TradeHistoryPane';
import TradePane from 'src/components/playboard/TradePane';

const Playboard = () => (
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
          <BalanceBar />
          <TradeHistoryPane />
        </Container>
        <CreditPane />
        <BoardBar />
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
          <GamePane />
        </Box>
      </Container>
    </Box>
  </>
);

export default Playboard;
