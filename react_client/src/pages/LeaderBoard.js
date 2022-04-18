import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

import HandlePane from 'src/components/leaderboard/HandlePane';
import RankTable from 'src/components/leaderboard/RankTable';

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
            marginBottom: '30px',
            // padding: '0 100px',
          }}
        >
          <HandlePane />
        </Container>
        <Container
          style={{
            marginTop: '0px',
            marginBottom: '80px',
            // padding: '0 100px',
          }}
        >
          <RankTable />
        </Container>
      </Container>
    </Box>
  </>
);

export default Playboard;
