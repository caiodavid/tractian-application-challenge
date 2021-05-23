import CreateUserModal from './CreateUserModal';
import EditCompanyModal from './EditCompanyModal'
import EditUserModal from './EditUserModal'
import EditUnitModal from './EditUnitModal'
import CreateUnitModal from './CreateUnitModal';
import EditAssetModal from './EditAssetModal';
import CreateAssetModal from './CreateAssetModal';

export default function AllModals() {

  return (
    <>
      <EditCompanyModal />
			<EditUserModal />
			<CreateUserModal />
			<EditUnitModal />
			<CreateUnitModal />
			<EditAssetModal />
			<CreateAssetModal />
    </>
  );
}