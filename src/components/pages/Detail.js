import React from 'react';
import styled from 'react-emotion';
import StarIcon from '../icons/StarIcon';

const TaskInfoHolder = styled.div`
  background: #00ac5b;
  text-align: center;
  color: #061456;
  padding-bottom: 50px;
`;
const TaskTag = styled.div`
  color: white;
  padding-top: 50px;
`;
const TaskTitle = styled.h2`
  color: white;
  font-size: 90px;
  margin-top: 10px;
`;

const TaskDayIcon = styled.div`
  margin-top: 20px;
`;

const TasksPoints = styled.div`
  font-weight: bold;
  margin-top: 25px;
`;

const TasksDay = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #061456;
  color: #ffffff;
  padding-left: 40px;
  padding-right: 40px;
`;

const UserHolder = styled.div`
  margin-left: 40px;
  margin-top: 40px;
  margin-right: 60px;
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  color: #061456;
  font-size: 90px;
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
  font-size: 90px;
  color: #00ac5b;
  font-weight: bold;
`;
const KmLabel = styled.div`
  text-align: center;
`;

const UserBio = styled.div`
  margin-top: 40px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #00ac5b;
  color: white;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = '';
    this.state = {
      tasks: [],
      loader: true,
    };
  }

  //   componentDidMount() {
  //     // firebas
  //     firebase
  //       .database()
  //       .ref('/tasks')
  //       .once('value', (data) => {
  //         const tasks = Object.values(data.val());
  //         this.setState({ tasks, loader: false });
  //       });
  //   }

  render() {
    return (
      <div>
        <TaskInfoHolder>
          <TaskTag>Help mij met ...</TaskTag>
          <TaskTitle>GRASMAAIEN</TaskTitle>
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
          <Button>HELPEN</Button>
        </UserHolder>
      </div>
    );
  }
}
