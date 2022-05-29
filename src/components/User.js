import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as UserActions from "../Actions/userAction";

const User = (props) => {
  const [users, setUsers] = useState([]);
  console.log('myprop' , props)

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
     props.fetchUserData();
    setUsers(props.user.userInitState.data);
  };
  return (
    <div>
      {users.map((item) => {
        return (
          <>
            <p>{item.name}</p>
          </>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  fetchUserData: UserActions.fetchUserData,
})(User);
