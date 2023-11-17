import { useAuth } from '../../hooks/authContext';
import { Container } from './styles'
import { TbReceipt } from 'react-icons/tb'

export function HeaderButton({ title, destination, ...rest }) {

  return (
    <Container to={destination} {...rest}>
      <TbReceipt />
      {title}
    </Container>
  );
}