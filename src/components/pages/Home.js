import React from 'react';
import styled from 'react-emotion';
// import { MainContainer, Grey } from '../general/GlobalCss';
import BoxIcon from '../icons/BoxIcon';
import LogoIcon from '../icons/LogoIcon';
import Row from '../list/Row';
import firebase from '../general/firebaseConfig';
import Loader from '../general/Loader';

const Header = styled.div`
  height: 150px;
  background: #061456;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 40px;
`;

const LeftSide = styled.div`
  display: flex;
`;
const Settings = styled.div`
  margin-right: 20px;
`;

const PointsHolder = styled.div`
  margin-right: 40px;
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

const User = styled.div`
  margin-right: 20px;
`;

const Holder = styled.div`
  min-height: 100%;
`;

const Head = styled.div`
  font-size: 40px;
  margin-top: 30px;
`;

const Tag = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const TagAmount = styled.div`
  display: inline-block;
`;

const HolderTable = styled.div`
  margin-left: 40px;
  margin-right: 40px;
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
      // .orderByChild('helping')
      // .equalTo(true)
      .once('value', (data) => {
        const values = Object.values(data.val());
        const tasksHelping = [];
        const tasksNotHelping = [];
        for (let i = 0; i < values.length; i += 1) {
          if (values[i].helping) {
            tasksHelping.push(values[i]);
          } else {
            tasksNotHelping.push(values[i]);
          }
        }
        this.setState({ tasksNotHelping, tasksHelping, loader: false });
      });
  }

  render() {
    // console.log(this.state.tasks);x
    const dataAccepted = [];

    if (this.state.tasksHelping.length > 0) {
      // console.log(this.state.tasks);
      for (let i = 0; i < this.state.tasksHelping.length; i += 1) {
        dataAccepted.push(<Row title={this.state.tasksHelping[i].title} key={i} />);
      }
    }

    const dataNotAccepted = [];
    if (this.state.tasksNotHelping) {
      for (let i = 0; i < this.state.tasksNotHelping.length; i += 1) {
        dataNotAccepted.push(<Row title={this.state.tasksNotHelping[i].title} key={i} />);
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
          <Head>
            <Tag>GEACCEPTEERDE VERZOEKEN</Tag>{' '}
            <TagAmount>({this.state.tasksHelping.length})</TagAmount>
          </Head>
          {dataAccepted}
          <Head>
            <Tag>HULP VERZOEKEN</Tag> <TagAmount>({this.state.tasksNotHelping.length})</TagAmount>
          </Head>
          {dataNotAccepted}
        </HolderTable>
      </Holder>
    );
  }
}
