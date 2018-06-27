import React from 'react';
import styled from 'react-emotion';
// import { MainContainer, Grey } from '../general/GlobalCss';
import BoxIcon from '../icons/BoxIcon';
import LogoIcon from '../icons/LogoIcon';

import Row from '../list/Row';
import firebase from '../general/firebaseConfig';
import Loader from '../general/Loader';

const Holder = styled.div`
  min-height: 100%;
  max-width: 100%;
`;

const Head = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;

const Tag = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const TagAmount = styled.div`
  display: inline-block;
`;

const HolderTable = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = '';
    this.state = {
      tasksHelping: [],
      tasksNotHelping: [],
      loader: true,
    };
  }

  componentDidMount() {
    // firebas
    firebase
      .database()
      .ref('/tasks')
      .orderByKey()
      .on('value', (data) => {
        // console.log(data.val());
        if (data.val()) {
          const values = Object.values(data.val());
          const keys = Object.keys(data.val());

          const tasksHelping = [];
          const tasksNotHelping = [];
          for (let i = 0; i < values.length; i += 1) {
            values[i].id = keys[i];
            if (values[i].helping) {
              tasksHelping.push(values[i]);
            } else {
              tasksNotHelping.push(values[i]);
            }
          }
          this.setState({ tasksNotHelping, tasksHelping, loader: false });
        } else {
          this.setState({ loader: false });
        }
      });
  }

  render() {
    console.log(this.state.tasksHelping);
    console.log(this.state.tasksNotHelping);
    const dataAccepted = [];

    if (this.state.tasksHelping.length > 0) {
      // console.log(this.state.tasks);

      for (let i = 0; i < this.state.tasksHelping.length; i += 1) {
        dataAccepted.push(<Row
          data={this.state.tasksHelping[i]}
          key={i}
        />);
      }
    }

    const dataNotAccepted = [];
    if (this.state.tasksNotHelping) {
      for (let i = 0; i < this.state.tasksNotHelping.length; i += 1) {
        dataNotAccepted.push(<Row
          data={this.state.tasksNotHelping[i]}
          key={i}
        />);
      }
    }
    if (this.state.loader) {
      return (
        <Holder>
          <Loader />
        </Holder>
      );
    }
    return (
      <Holder>
        <HolderTable>
          {this.state.tasksHelping.length > 0 && (
            <Head>
              <Tag>GEACCEPTEERDE VERZOEKEN</Tag>{' '}
              <TagAmount>({this.state.tasksHelping.length})</TagAmount>
            </Head>
          )}

          {dataAccepted}
          {this.state.tasksNotHelping.length > 0 && (
            <Head>
              <Tag>HULP VERZOEKEN</Tag> <TagAmount>({this.state.tasksNotHelping.length})</TagAmount>
            </Head>
          )}
          {dataNotAccepted}
        </HolderTable>
      </Holder>
    );
  }
}
