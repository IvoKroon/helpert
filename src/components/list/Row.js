import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import StarIcon from '../icons/StarIcon';

const Holder = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  box-shadow: 2px 2px 0px 0px rgba(122, 122, 122, 0.2);
  align-items: center;
  height: 180px;
`;
const MainData = styled.div`
  margin-left: 30px;
`;
const Title = styled.div`
  color: darkblue;
  font-size: 42px;
  font-weight: bold;
`;

const RatingHolder = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 40px;
  font-weight: bold;
`;

const RightSide = styled.div`
  display: flex;
`;

const DataHolder = styled.div`
  margin-right: 30px;
  margin-left: 20px;
`;

const Data = styled.div`
  color: #00ac5b;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DataTitle = styled.div`
  font-size: 26px;
  color: #202125;
  font-weight: light;
  text-align: center;
`;

const StartIconHolder = styled.div`
  margin-left: 5px;
`;

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = '';
    this.state = {
      results: [],
      search: true,
      firstTime: true,
    };
  }

  render() {
    return (
      <Link to="/detail">
        <Holder>
          <MainData>
            <Title>{this.props.title}</Title>
            <RatingHolder>
              4.1
              <StartIconHolder>
                <StarIcon />
              </StartIconHolder>
              <div>@</div>
            </RatingHolder>
          </MainData>
          <RightSide>
            <DataHolder>
              <Data>100</Data>
              <DataTitle>PUNTEN</DataTitle>
            </DataHolder>
            <DataHolder>
              <Data>{'<1'}</Data>
              <DataTitle>KM</DataTitle>
            </DataHolder>
          </RightSide>
        </Holder>
      </Link>
    );
  }
}
