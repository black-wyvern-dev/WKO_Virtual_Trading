// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Grid,
} from '@material-ui/core';

const LP = () => {
  // const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>WKO 100</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '92%',
          paddingRight: '20px',
          margin: 'auto',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        
          <Grid
            sx={{
              flex: '1',
              height: '100%',
              paddingRight: '50px',
            }}
          >
            <Grid
              sx={{
                backgroundColor: 'background.secondary',
                fontFamily: 'Roboto',
                fontSize: '28px',
                // height: '1600px',
                height: '100%',
                padding: '40px'
              }}
              >
              <div               
              >
                Hello & Welcome to our website ! 
              </div>
              <br />              
              <div>
                <span style={{
                  'fontFamily': 'Electrolize',
                  'fontStyle': 'italic',
                  'fontSize': '38px',
                  'color': 'rgb(0,201,201)',
                }}>
                  World Knockout 
                </span> 
                <span> </span>
                is a brand new innovative concept in hybrid gaming combining the basic principles of financial trading with the mechanics of traditional games of chance.       
                <br />
                <br />
                An exciting and refreshing alternative to conventional trading and gaming markets. 
                <br />
                <br />
                Join and play for free*1 with no deposit required. There is no minimum age requirement.*2 
                <br />
                <br />
                You do not need any previous experience or knowledge of financial trading to get started today. 
                <br />
                <br />
                CLICK or TOUCH 
                <span> </span>
                <span
                style={{
                  backgroundColor: 'rgb(69,129,142)',
                  padding: '2px 10px',
                }}
                > 
                PLAY 
                </span>
                <span> </span>
                anytime to Replay DEMO ⇨ 
                <br />
                <div
                style={{
                  borderTop: '2px dashed white',
                  marginTop: '20px',
                  width: '95%',
                }}
                >                  
                </div>                
                <br />
                The object of the game is to make virtual profits from buying and selling virtual shares in the 100 coded tiles on the 
                <span> </span>
                <span style={{
                  'fontFamily': 'Roboto',
                  'fontWeight': 'bold',
                  'color': 'rgb(0,201,201)',
                }}>
                  WKO
                </span> 
                <span> </span>
                100 trading platform. 
                <br />
                <br />
                Each tile represents one country or territory and is identified by a 2 digit ISO country code (CC)* 
                <br />
                <br />
                Countries are randomly knocked out one by one from the
                <span> </span>
                <span style={{
                  'fontFamily': 'Roboto',
                  'fontWeight': 'bold',
                }}>
                  WKO
                </span> 
                <span> </span>
                trading grid until only one remains. 
                <br />
                <br />
                After each knockout, the share price of the remaining tiles increase proportionally. 
                <br />
                <br />
                Just Log-In to activate your hourly free game code and receive ONE free Game Credit and ONE free loyalty point. 
                <br />
                <br />
                You can then compete for free in the 
                <span> </span>
                <span style={{
                  'fontFamily': 'Roboto',
                  'fontWeight': 'bold',
                  'color': 'rgb(0,201,201)',
                }}>
                  WKO
                </span> 
                <span> </span>
                100 Index which incorporates an exciting Player Profit Share Scheme (                
                <span style={{
                  'fontFamily': 'Roboto',
                  'fontWeight': 'bold',
                }}>
                  PPSS
                </span>                 
                ). 
                <br />
                <br />
                We have pledged to give back 20% of our annual profits to the top 100 players in the 
                <span> </span>
                <span style={{
                  'fontFamily': 'Roboto',
                  'fontWeight': 'bold',
                }}>
                  PPSS
                </span> 
                <span> </span>
                 Index for free ! *4 
                <br />
                <br />
                Join us and start trading                 
                <span> </span>
                <span style={{
                  'fontFamily': 'Electrolize',
                  'fontStyle': 'italic',
                  'color': 'rgb(0,201,201)',
                }}>
                  World Knockout 
                </span> 
                <span> </span>
                today. 
                <br />
                Good Luck !
              </div>
            </Grid>     
          </Grid>

          <Grid
            sx={{
              flex: '1',
              height: '100%', 
              paddingLeft: '50px',
            }}            
          >    
            <Grid
              sx={{
                backgroundColor:'background.secondary',
                // height: '1600px',
                height: '100%',
              }}
            >
                                
            </Grid>
          </Grid>
      </Box>
    </>
  );
};

export default LP;
