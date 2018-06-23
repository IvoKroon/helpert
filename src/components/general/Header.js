import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styled from 'react-emotion';
import { MainColor } from '../general/GlobalCss';
import BoxIcon from '../icons/BoxIcon';
import LogoIcon from '../icons/LogoIcon';
import chicken from '../../chicken.jpg';
import ArrowIcon from '../icons/ArrowIcon';

const Holder = styled.div`
  position: fixed;
  height: 150px;
  background: #061456;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const Settings = styled.div`
  margin-right: 30px;
`;

const PointsHolder = styled.div`
  margin-right: 50px;
`;

const Points = styled.div`
  text-align: center;
  font-size: 46px;
  color: #00ac5b;
  font-weight: bold;
`;

const PointsTitle = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
`;

const User = styled.img`
  margin-right: 40px;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;
const BackIconHolder = styled.div`
  margin-right: 30px;
`;
const LogoBackButtonHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const Header = props => (
  // console.log(props.history.goBack());

  <Holder>
    <LogoBackButtonHolder>
      {props.location.pathname !== '/' ? (
        <BackIconHolder onClick={() => props.history.goBack()}>
          <ArrowIcon />
        </BackIconHolder>
      ) : null}
      <Logo>
        <LogoIcon />
      </Logo>
    </LogoBackButtonHolder>
    <LeftSide>
      <PointsHolder>
        <Points>600</Points>
        <PointsTitle>PUNTEN</PointsTitle>
      </PointsHolder>
      <User src={chicken} />
    </LeftSide>
  </Holder>
);
export default withRouter(Header);
