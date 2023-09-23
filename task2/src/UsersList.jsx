import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';

    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let userList;

    if (this.state.sorting) {
      userList = this.props.users
        .slice()
        .sort((a, b) =>
          this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
        );
    } else {
      userList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {userList.map((user) => (
            <User key={user.id} {...user} />
          ))}
          {/* <li className="user">
          <span className="user__name">Tom</span>
          <span className="user__age">17</span>
        </li>
        ...
        <li className="user">
          <span className="user__name">Sam</span>
          <span className="user__age">45</span>
        </li> */}
        </ul>
      </div>
    );
  }
}

export default UsersList;
