import css from './Practising.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface UserInfo {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
};

interface RandomDataType {
  results: Array<UserInfo>;
  info: {
    page: number;
  }
}

const fetchRandomUserData = async (pageNumber: number): Promise<object> => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      console.error(error);
    })
};

const Practising = () => {
  const [usersInfo, setUsersInfo] = useState<any>([]);
  const [nextUserPage, setNexUserPage] = useState(1);

  const fetchNextUser = () => {
    fetchRandomUserData(nextUserPage).then((randomData: RandomDataType) => {
      if (randomData === undefined) return;

      const newUserInfo = [
        ...usersInfo,
        ...randomData.results,
      ];

      setUsersInfo(newUserInfo);
      setNexUserPage(randomData.info.page + 1);
    });
  };

  const getFullUsersName = (userInfo: UserInfo) => {
    const {title, first, last} = userInfo.name;
    return `${title} ${first} ${last}`
  };

  useEffect(() => {
    fetchRandomUserData().then(randomData => {
      setUsersInfo(randomData.results);
    });
  }, []);

  return (
    <div className={css.main_div}>
      <h1>Random User</h1>

      {usersInfo.map((userInfo: UserInfo, index) => (
        <div key={index}>
          <p>{getFullUsersName(userInfo)}</p>
          <img src={userInfo.picture.medium} alt="random user" />
        </div>
      ))}

      <button onClick={() => fetchNextUser()}>Get More Users</button>
    </div>
  );
};

export default Practising;

// https://randomuser.me/api
// ?page=2
