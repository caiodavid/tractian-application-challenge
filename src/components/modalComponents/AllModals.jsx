import CreateUserModal from './CreateUserModal';
import EditCompanyModal from './EditCompanyModal'
import EditUserModal from './EditUserModal'
import EditUnitModal from './EditUnitModal'
import CreateUnitModal from './CreateUnitModal';

export default function AllModals() {

  return (
    <>
      <EditCompanyModal />
			<EditUserModal />
			<CreateUserModal />
			<EditUnitModal />
			<CreateUnitModal />
    </>
  );
}