import React from 'react';
import styled from 'styled-components';
import Pricing from './components/Pricing';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      {/* <MainContainer>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: '500 GB Storage' },
              { text: '2 Users Allowed' },
              { text: 'Send up to 3GB' },
            ]}
            price={19.99}
            currency="$"
            buttonContent="LEARN MORE"
            headerText="Basic"
            background=''
            color="hsl(237, 63%, 64%)"
            border="10px 0 0 10px"
          />
        </div>

        <div className="pricing-component">
          <Pricing
            data={[
              { text: '1 TB Storage', value: true },
              { text: '5 Users Allowed', value: true },
              { text: 'Send up to 10 GB', value: false },
            ]}
            price={24.99}
            currency="$"
            buttonContent="LEARN MORE"
            headerText="Professional"
            background="linear-gradient(90deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)"
            color="white"
            border="10px"
            padding="20px 0"
          />
        </div>

        <div className="pricing-component">
          <Pricing
            data={[
              { text: '2 tB Storage', value: true },
              { text: '10 Users Allowed', value: true },
              { text: 'Send up to 20 GB', value: true },
            ]}
            price={39.99}
            currency="$"
            buttonContent="LEARN MORE"
            headerText="Master"
            background=''
            color="hsl(237, 63%, 64%)"
            border="0 10px 10px 0"
          />
        </div>
      </MainContainer> */}
    </div>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f1ff;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 1rem 0;
    }
  }
`;

export default App;
