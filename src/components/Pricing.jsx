import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pricing = () => ({
  data,
  price,
  buttonContent,
  currency = '$',
  headerText,
  background,
  border,
  padding,
  color
}) => {
  return (
    <MainContainer padding={padding} border={border} background={background}>
      <Header>{headerText}</Header>
      <PricingContainer>
        <PriceContainer>
          <CurrencyContainer>
            <span>{currency}</span>
          </CurrencyContainer>
          <Price>
            {price}
          </Price>
        </PriceContainer>
        <BorderBetween></BorderBetween>
      </PricingContainer>

      <DataContainer>
        <ul>
          {data.map((dt, index) => (
            <li key={index}>{dt.text}</li>
          ))}
        </ul>
      </DataContainer>
      <ButtonContainer>
        <Button background={background} color={color}>{buttonContent}</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 20rem;
  border-radius: ${(props) => props.border};
  min-height: 25rem;
  padding: ${(props) => props.padding};
  height: max-content;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  color: #1d3557;
  box-shadow: 0 4px 7px -3px;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 8px 26px -6px;
    margin-bottom: 0.4rem;
  }
`;

const Header = styled.div`
  margin: 0.6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`;

const BorderBetween = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #999999;
  width: 80%;
`;

const PricingContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const CurrencyContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 3px;
`;

const Price = styled.div`
    font-size: 55px;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0.3rem;
  border: 0.1rem solid white;
  width: 90%;
  height: 2.5rem;
  background: ${(props) => props.background === '' ? 'linear-gradient(90deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)' : 'white'};
  color: ${(props) => props.color === 'white' ? 'hsl(237, 63%, 64%)' : 'white'};
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${(props) => props.background === '' ? 'white' : 'linear-gradient(90deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)'};
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color === 'white' ? 'white' : 'black'};
  }
`;

const DataContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  ul {
    padding: 0;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
  }
`;

Pricing.propTypes = {
  data: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  buttonContent: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

/* PropTypes exporta uma variedade de validadores que podem ser usados para certificar que os dados que você recebe são válidos. Neste exemplo, utilizamos PropTypes.string. Quando um valor inválido for fornecido a uma prop, um alerta será exibido no console JavaScript. Por motivos de performance, propTypes é checado apenas em modo de desenvolvimento.
*/

export default Pricing;
