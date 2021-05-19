import { useDispatch, useSelector } from "react-redux";
import './AssetsOverview.css'

export default function AssetsOverview() {
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
	const allAssets = useSelector((state) => state.assets.allAssets);

  return (
    <div className="site-layout-background component-box">
      {Object.keys(selectedUnity).length === 0 ? (
        <h1>Todas as unidades</h1>
      ) : (
        <h1>{selectedUnity.name}</h1>
      )}

			
    </div>
  );
}
