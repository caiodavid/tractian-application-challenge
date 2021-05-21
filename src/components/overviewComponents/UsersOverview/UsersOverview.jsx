// React
import { useState, useEffect } from "react";
// Style and Components
import "./UsersOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setFilteredUsersByUnityId,
  clearFilteredUsersByUnityId,
} from "../../../store/Users.store";
// Ant Design
import { List, Avatar } from "antd";

export default function UsersOverview() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const allUsers = useSelector((state) => state.users.allUsers);
  const filteredUsersByUnityId = useSelector(
    (state) => state.users.filteredUsersByUnityId
  );
	const [usersList, setUsersList] = useState(allUsers);

  useEffect(() => {
    if (Object.keys(selectedUnity).length === 0) {
      dispath(clearFilteredUsersByUnityId());
    } else {
      dispath(setFilteredUsersByUnityId(selectedUnity.id));
    }
  }, [selectedUnity]);

	useEffect(() => {
    if (Object.keys(selectedUnity).length === 0) {
      setUsersList(allUsers);
    } else {
      setUsersList(filteredUsersByUnityId);
    }
  }, [filteredUsersByUnityId]);

  return (
    <div className="site-layout-background component-box">
      {Object.keys(selectedUnity).length === 0 ? (
        <h1>Todos os colaboradores</h1>
      ) : (
        <h1>Colaboradores da {selectedUnity.name}</h1>
      )}

      <div className="demo-infinite-container">
          {<List
            dataSource={ usersList }
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.name}</a>}
                  description="user@empresa.com"
                />
                <div>Content</div>
              </List.Item>
            )}
          ></List>}
      </div>
    </div>
  );
}
