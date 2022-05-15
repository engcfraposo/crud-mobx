import { observer } from 'mobx-react'
import { useRootState } from './store/RootStateContext'
import UserTable from './components/UserTable'
import { Fragment, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import UserModal from './components/UserModal'
import Navbar from './components/Navbar'
import UserEditModal from './components/UserEditModal'


function App() {
  const { userStore, modalStore } = useRootState()
  useEffect(() => { 
    userStore.getUsers() }, 
  [userStore.userList.length]);
  return (
    <Fragment>
          <Navbar openModal={modalStore.openCreateUserModal}/>
          <Container 
            fluid="sm" 
            style={{marginTop: 25}}
          >
            <Row>
                <UserTable 
                  users={userStore.userList} 
                  removeUser={userStore.removeUser} 
                  openEditUserModal={modalStore.openEditUserModal}
                />
            </Row>
          </Container>

      <UserModal 
        modal={modalStore.createUserModal} 
        onClose={modalStore.closeCreateUserModal} 
        addUser={userStore.addUser}
      />
      <UserEditModal
        editUserModal={modalStore.editUserModal}
        onClose={modalStore.closeEditUserModal}
        updateUser={userStore.updateUser}
      />
      </Fragment>
  )
}

export default observer(App)
