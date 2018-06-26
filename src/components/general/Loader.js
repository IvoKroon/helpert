import React from 'react';
import styled from 'react-emotion';
import LoadIcon from '../icons/LoadIcon';

const Holder = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 40px;
`;

const Loader = () => (
  <Holder>
    <LoadIcon width="50" height="50" color="#061456" />
  </Holder>
);

export default Loader;
