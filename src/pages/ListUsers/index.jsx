import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import Trash from '../../assets/trash.svg'
import { User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  OuterContainer,
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarContainer
} from './styles'

function ListUsers() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    async function getUsers() {
      const { data } = await api.get('/usuarios')

      setUsers(data)
    }

    getUsers()
  }, [])

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter( user => user.id != id )

    setUsers(updatedUsers)
  }

  return (
    <OuterContainer>
      <Container>
        <Title>Lista de Usuários</Title>

        <ContainerUsers>
          {users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarContainer>
                <User size={32} color="white" />
              </AvatarContainer>
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </div>
              <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)}/>
            </CardUsers>
          ))}
        </ContainerUsers>

        <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
      </Container>
    </OuterContainer>
  )
}

export default ListUsers