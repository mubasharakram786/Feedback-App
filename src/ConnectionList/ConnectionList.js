import React, { Component } from 'react';
import Connection from '../ConnectionList/Connection/Connection';
export class ConnectionList extends Component {

    state = {
        connections: [
            {
                id: 'fed',
                coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs8lMjqJ6bR2fUPy4koOvEjSQxH-RItSwOQ&usqp=CAU',
                profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Mubashar Akram',
                designation: 'Frontend Developer'
            },
            {
                id: '2da',
                coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmnNkGOvEPWYS8w_V5VjFUECmRj8QCRmqQClh_VjhhMQskWdl4uDanp83eVy1_o4rviM&usqp=CAU',
                profilePic: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
                name: 'Mateen Rajpoot',
                designation: '2D Artist'
            },
            {
                id: 'cw',
                coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY3m50jXOmEg5NaIspGrYqO3qGq_XXkCuvh0gcr6Ib6YKn1UoZqVqZY5444b80qb-slo&usqp=CAU',
                profilePic: 'https://thumbs.dreamstime.com/b/smiling-man-wearing-glasses-looking-camera-isolated-background-smiling-young-man-wearing-shirt-glasses-looking-camera-139655494.jpg',
                name: 'Ayyon Ali',
                designation: 'Content Writer'
            }

        ],
        hasConnections: false
    }

    toggleConnectionList = () => {
        const doesShow = this.state.hasConnections;
        this.setState({
            hasConnections: !doesShow
        })
    }
    changeNameHandler = (event, id) => {
        const connectionIndex = this.state.connections.findIndex(c => {
            return c.id == id;
        })

        const connection = {
            ...this.state.connections[connectionIndex]
        }
        connection.name = event.target.value;

        const newConnection = [...this.state.connections];
        newConnection[connectionIndex] = connection;
        this.setState({
            connections: newConnection
        })
    }
    deleteConnectionHandler = (index) => {
        const newConnections = [...this.state.connections];
        newConnections.splice(index, 1);
        this.setState({
            connections: newConnections
        })
    }
    render() {
        const styles = {
            backgroundColor: ' #3bb54a',
            color: '#fff'
        }

        const classes = [];

        if (this.state.connections.length <= 2) {
            classes.push('alert');
        }
        if (this.state.connections.length <= 1) {
            classes.push('bold');
        }
        let showConnections = null;

        if (this.state.hasConnections) {
            showConnections = (
                <div className='pl-10'>
                    <p className={classes.join(' ')}>you have {this.state.connections.length} connection Request</p>

                    <div className='wrapper'>
                        {this.state.connections.map((c, index) => {
                            return <Connection
                                coverPhoto={c.coverUrl}
                                photo={c.profilePic}
                                name={c.name}
                                designation={c.designation}
                                key={c.id}
                                change={(event) => this.changeNameHandler(event, c.id)}
                                del={() => this.deleteConnectionHandler(index)}
                            />

                        })}
                    </div>
                </div>
            )
            styles.backgroundColor = 'red';
        }



        return (
            <div>
                <button style={styles} className='toggle-btn' onClick={this.toggleConnectionList} > Toggle Connections</button>

                {showConnections}
            </div>

        )
    }
}
export default ConnectionList;