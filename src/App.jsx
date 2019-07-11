import React, { Component } from 'react';
import FriendCard from './components/FriendCard/index';
import Nav from './components/Nav/index';
import Wrapper from './components/Wrapper/index';
import Title from './components/Title/index'
import Container from './Container'
import Row from './Row';
import Column from './Column';
import friends from './friends.json';
import './App.css';

// Shuffle Friends
function shuffleFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// create Class
class App extends Component {
    // set state
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        trueFalse: '',
        clicked: []
    }

    // handle click
    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) })
        } else {
            this.handleReset();
        }
    }

    // handle score increment
    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            trueFalse: ''
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }
        else if (newScore === 12) {
            this.setState('Congratulations, Bobby!!')
        }
        this.handleShuffle();
    };

    // handle game reset
    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            trueFalse: 'Goodbye, Bill',
            clicked: []
        })
    }

    // handle shuffle
    handleShuffle = () => {
        let shuffledFriends = shuffleFriends(friends);
        this.setState({ friends: shuffledFriends });
    };

    // render screen
    render() {
        return (
            <Wrapper>
                <Nav
                    title='King of the Hill Memory Game!'
                    score={this.setState.currentScore}
                    topScore={this.setState.topScore}
                    trueFalse={this.state.trueFalse}
                />
                <Title>
                    Click on an image to earn points, but don't click on any more than once!
                </Title>
                <Container>
                    <Row>
                        {this.state.friends.map(friend => {
                            <Column size='md-4 sm-8'>
                                <FriendCard 
                                    key={friend.id}
                                    handleClick={this.handleClick}
                                    handleIncrement={this.handleIncrement}
                                    handleReset={this.handleReset}
                                    handleShuffle={this.handleShuffle}
                                    id={friend.id}
                                    image={friend.image}
                                />
                            </Column>
                        })}
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}

// export App
export default App;
