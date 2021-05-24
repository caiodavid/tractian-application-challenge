// React
import { useState, useEffect } from "react";
// Style and Components
import "./UsersOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setFilteredUsersByUnityId,
  clearFilteredUsersByUnityId,
  setSelectedUser,
  deleteUser,
} from "../../../store/Users.store";
import {
  handleCreateUserModalVisibility,
  handleEditUserModalVisibility,
} from "../../../store/Modals.store";
// Ant Design
import { List, Avatar, Button, Popconfirm } from "antd";

export default function UsersOverview() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const allUsers = useSelector((state) => state.users.allUsers);
  const filteredUsersByUnityId = useSelector(
    (state) => state.users.filteredUsersByUnityId
  );
  const [usersList, setUsersList] = useState(allUsers);

  useEffect(() => {
    if (selectedUnity.id === 0) {
      dispath(clearFilteredUsersByUnityId());
    } else {
      dispath(setFilteredUsersByUnityId(selectedUnity.id));
    }
  }, [selectedUnity, allUsers]);

  useEffect(() => {
    if (selectedUnity.id === 0) {
      setUsersList(allUsers);
    } else {
      setUsersList(filteredUsersByUnityId);
    }
  }, [filteredUsersByUnityId, allUsers]);

  function showUserEditModal(id) {
    dispath(setSelectedUser(id));
    dispath(handleEditUserModalVisibility());
  }

  function showCreateUserModal() {
    dispath(handleCreateUserModalVisibility());
  }

  function handleDeleteUser(id) {
    dispath(deleteUser(id));
  }

  return (
    <div className="site-layout-background component-box">
      <div className="user-container-header">
        {selectedUnity.id === 0 ? (
          <h1>Todos os usuários</h1>
        ) : (
          <h1>Usuários da {selectedUnity.name}</h1>
        )}
        <Button
          key="submit"
          type="primary"
          onClick={() => showCreateUserModal()}
        >
          Adicionar usuário
        </Button>
      </div>
      <div className="demo-infinite-container">
        <List
          dataSource={usersList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a>{item.name}</a>}
                description={item.email}
              />
              <div className="item-buttons">
                <Button
                  type="secondary"
                  size="small"
                  onClick={() => showUserEditModal(item.id)}
                >
                  Editar
                </Button>
                <Popconfirm
                  placement="topLeft"
                  title={
                    "Você tem certeza que deseja deletar este coloborador?"
                  }
                  onConfirm={() => handleDeleteUser(item.id)}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button type="text" danger size="small">
                    Excluir
                  </Button>
                </Popconfirm>
              </div>
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
}
