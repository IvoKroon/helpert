import React from 'react';
import styled from 'react-emotion';
import Redirect from 'react-router-dom/Redirect';
import { withRouter, Link } from 'react-router-dom';
import StarIcon from '../icons/StarIcon';
import firebase from '../general/firebaseConfig';
import Loader from '../general/Loader';
import { CapitalizeFirstLetter } from '../general/Functions';

const TaskInfoHolder = styled.div`
  background: #00ac5b;
  text-align: center;
  color: #061456;
  padding-bottom: 25px;
`;
const TaskTag = styled.div`
  color: white;
  padding-top: 25px;
`;
const TaskTitle = styled.h2`
  color: white;
  font-size: 40px;
  margin-top: 5px;
`;

const TaskDayIcon = styled.div`
  margin-top: 10px;
`;

const TasksPoints = styled.div`
  font-weight: bold;
  margin-top: 15px;
`;

const TasksDay = styled.div`
  margin-top: 10px;
`;

const Text = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  background: #061456;
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
`;

const UserHolder = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 30px;
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  color: #061456;
  font-size: 35px;
`;

const StartIconHolder = styled.div`
  margin-left: 5px;
`;

const RatingHolder = styled.div`
  margin-top: 10px;
  display: flex;
  font-weight: bold;
`;

const KmValue = styled.div`
  text-align: center;
  font-size: 35px;
  color: #00ac5b;
  font-weight: bold;
`;
const KmLabel = styled.div`
  text-align: center;
`;

const UserBio = styled.div`
  margin-top: 20px;
`;

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${props => (props.helping ? 'red' : '#00ac5b')};
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = '';
    this.state = {
      task: null,
      loader: true,
      redirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    firebase
      .database()
      .ref(`/tasks/${id}`)
      .on('value', (data) => {
        this.setState({ loader: false, task: data.val() });
      });
  }

  clickEvent() {
    const { id } = this.props.match.params;
    console.log(this.state.task.title);
    firebase
      .database()
      .ref(`/tasks/${id}`)
      .update({ helping: !this.state.task.helping })
      .then(() => {
        console.log('DONE');
      });
    // this.setState({ redirect: true });
  }

  render() {
    console.log(this.state.task);
    if (this.state.loader) {
      return <Loader />;
    }
    if (this.state.redirect) {
      return <Redirect to="" />;
    }
    return (
      <div>
        <TaskInfoHolder>
          <TaskTag>
            {this.state.task.helping ? 'Jij helpt mij met ...' : 'Help mij met ...'}
          </TaskTag>
          <TaskTitle>{CapitalizeFirstLetter(this.state.task.title)}</TaskTitle>
          <TaskDayIcon>@</TaskDayIcon>
          <TasksPoints> 100 PUNTEN </TasksPoints>
          <TasksDay> 1 dag geleden </TasksDay>
        </TaskInfoHolder>
        <Text>Grasmaaien in de voor en achtertuin aangezien ik dit zelf nauwelijks meer kan.</Text>

        <UserHolder>
          <UserContainer>
            <div>
              <Name>ANS</Name>
              <RatingHolder>
                4.1
                <StartIconHolder>
                  <StarIcon />
                </StartIconHolder>
              </RatingHolder>
            </div>
            <div>
              <div>
                <KmValue>{'<1'}</KmValue>
                <KmLabel>KM</KmLabel>
              </div>
            </div>
          </UserContainer>
          <UserBio>Hallo, Ik heb moeite met lopen. Ik stel hulp erg op prijs.</UserBio>
          <Button helping={this.state.task.helping} onClick={() => this.clickEvent()}>
            {this.state.task.helping ? 'NIET MEER HELPEN' : 'HELPEN'}
          </Button>
        </UserHolder>
      </div>
    );
  }
}
export default withRouter(Detail);
