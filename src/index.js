// Deprecated
import Deprecated_MapControlsPresentation from "./Deprecated_MapControls/presentation";
import Deprecated_MapControls from "./Deprecated_MapControls";
import Deprecated_MapWrapper from "./Deprecated_MapWrapper";
import Deprecated_PresentationMapWithControls from "./Deprecated_PresentationMapWithControls";
import Deprecated_WorldWindMapPresentation from "./Deprecated_WorldWindMap/presentation";
import Deprecated_WorldWindMap from "./Deprecated_WorldWindMap";
import Deprecated_MapSet from "./Deprecated_MapSet";
import Deprecated_MapSetPresentation from "./Deprecated_MapSet/presentation";

import Deprecated_WorldWindMapWithHandlers from "./Deprecated_WorldWindMap/presentationWithHandlers";
import {getCartogramColorScale, DEFAULTFILLTRANSPARENCY, DEFAULTOUTLINETRANSPARENCY, transformScaleDarker} from "./Deprecated_WorldWindMap/styles/colors";
import {getRadius} from "./Deprecated_WorldWindMap/layers/utils/diagram";
import {getCartogramStyleFunction} from './Deprecated_WorldWindMap/styles/cartogram';
import {MAX_DIAGRAM_RADIUS, MIN_DIAGRAM_RADIUS, getCartodiagramStyleFunction} from "./Deprecated_WorldWindMap/styles/cartodiagram";
import { getPolygonImageByAttribution } from './Deprecated_WorldWindMap/legend/legend'
import {noDataAccentedPalette, filteredPalette, hoverPalette, getColorPallet} from './Deprecated_WorldWindMap/styles/colors';
import {getCircle} from './Deprecated_WorldWindMap/styles/images';
import layersHelper from './Deprecated_WorldWindMap/layers/helpers';
import {defaultVectorStyle} from "./Deprecated_WorldWindMap/layers/utils/vectorStyle";
import ExtendedRenderableLayer from './Deprecated_WorldWindMap/layers/VectorLayer';
import CartodiagramVectorLayer from './Deprecated_WorldWindMap/layers/CartodiagramVectorLayer';
import CartogramVectorLayer from './Deprecated_WorldWindMap/layers/CartogramVectorLayer';
import {getStaticPolygonStyleFunction} from './Deprecated_WorldWindMap/styles/staticPolygon';

export {
    Deprecated_MapControlsPresentation,
    Deprecated_MapControls,
    Deprecated_MapWrapper,
    Deprecated_PresentationMapWithControls,
    Deprecated_WorldWindMap,
    Deprecated_WorldWindMapPresentation,
    Deprecated_MapSet,
    Deprecated_MapSetPresentation,

    Deprecated_WorldWindMapWithHandlers,
    getCartogramColorScale,
    getCartogramStyleFunction,
    getCartodiagramStyleFunction,
    DEFAULTFILLTRANSPARENCY,
    DEFAULTOUTLINETRANSPARENCY,
    transformScaleDarker,
    getRadius,
    MAX_DIAGRAM_RADIUS,
    MIN_DIAGRAM_RADIUS,
    noDataAccentedPalette,
    filteredPalette,
    hoverPalette,
    getColorPallet,
    getCircle,
    getPolygonImageByAttribution,
    layersHelper,
    defaultVectorStyle,
    ExtendedRenderableLayer,
    CartodiagramVectorLayer,
    CartogramVectorLayer,
    getStaticPolygonStyleFunction
}

export default {
    Deprecated_MapControls,
    Deprecated_MapWrapper,
    Deprecated_PresentationMapWithControls,
    Deprecated_WorldWindMap,
    Deprecated_WorldWindMapPresentation,
    Deprecated_MapSet,
    Deprecated_MapSetPresentation
}