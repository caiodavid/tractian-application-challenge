// React
import { useState, useEffect } from "react";
// Style and Components
import "./AssetsOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setFilteredAssetsByUnityId,
  clearFilteredAssetsByUnityId,
} from "../../../store/Assets.store";

export default function AssetsOverview() {
  const [inAlertCounter, setInAlertCounter] = useState(0);
  const [inDowntimeCounter, setInDowntimeCounter] = useState(0);
  const [inOperationCounter, setInOperationCounter] = useState(0);

  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const allAssets = useSelector((state) => state.assets.allAssets);
  const filteredAssetsByUnityId = useSelector(
    (state) => state.assets.filteredAssetsByUnityId
  );

  useEffect(() => {
    if (Object.keys(selectedUnity).length === 0) {
      dispath(clearFilteredAssetsByUnityId());
    } else {
      dispath(setFilteredAssetsByUnityId(selectedUnity.id));
    }
  }, [selectedUnity]);

	// useEffect para atualizar couters
  useEffect(() => {
    let inAlertStatus = 0;
    let inDowntimeStatus = 0;
    let inOperationStatus = 0;

    if (Object.keys(selectedUnity).length === 0) {
      allAssets.map((asset) => {
        switch (asset.status) {
          case "inAlert":
            inAlertStatus++;
            break;

          case "inDowntime":
            inDowntimeStatus++;
            break;

          case "inOperation":
            inOperationStatus++;
            break;

          default:
            break;
        }
      });
    } else {
      filteredAssetsByUnityId.map((asset) => {
        switch (asset.status) {
          case "inAlert":
            inAlertStatus++;
            break;

          case "inDowntime":
            inDowntimeStatus++;
            break;

          case "inOperation":
            inOperationStatus++;
            break;

          default:
            break;
        }
      });
    }

    setInAlertCounter(inAlertStatus);
    setInDowntimeCounter(inDowntimeStatus);
    setInOperationCounter(inOperationStatus);
  }, [filteredAssetsByUnityId]);

	

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
