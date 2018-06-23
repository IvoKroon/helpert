import React from 'react';
import styled from 'react-emotion';
import LoadIcon from '../icons/LoadIcon';

const Holder = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 40px;
`;

const Loader = () => (
  <Holder>
    <LoadIcon width="100" height="100" color="#061456" />
  </Holder>
);

export default Loader;
