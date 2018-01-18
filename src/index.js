import PlotlyEditor from './PlotlyEditor';
import {
  connectAnnotationToLayout,
  connectAxesToLayout,
  connectLayoutToPlot,
  connectToContainer,
  connectTraceToPlot,
  dereference,
  localize,
  localizeString,
  walkObject,
} from './lib';
import {EDITOR_ACTIONS} from './lib/constants';

import {
  AnnotationAccordion,
  AnnotationArrowRef,
  AnnotationRef,
  ArrowSelector,
  AxesRange,
  AxesSelector,
  CanvasSize,
  ColorPicker,
  DataSelector,
  Dropdown,
  Flaglist,
  Fold,
  FontSelector,
  Info,
  Layout,
  LayoutNumericFraction,
  LayoutNumericFractionInverse,
  LineDashSelector,
  LineShapeSelector,
  MenuPanel,
  MultiFormatTextEditor,
  Numeric,
  Panel,
  PanelMenuWrapper,
  Radio,
  Section,
  SymbolSelector,
  TraceAccordion,
  TraceMarkerSection,
  TraceRequiredPanel,
  TraceSelector,
  LayoutPanel,
  AxesFold,
} from './components';

export {
  AnnotationAccordion,
  AnnotationArrowRef,
  AnnotationRef,
  ArrowSelector,
  AxesRange,
  AxesSelector,
  CanvasSize,
  ColorPicker,
  DataSelector,
  Dropdown,
  EDITOR_ACTIONS,
  Flaglist,
  Fold,
  FontSelector,
  Info,
  Layout,
  LayoutNumericFraction,
  LayoutNumericFractionInverse,
  LineDashSelector,
  LineShapeSelector,
  MenuPanel,
  MultiFormatTextEditor,
  Numeric,
  Panel,
  PanelMenuWrapper,
  Radio,
  Section,
  SymbolSelector,
  TraceAccordion,
  TraceMarkerSection,
  TraceRequiredPanel,
  TraceSelector,
  connectAnnotationToLayout,
  connectAxesToLayout,
  connectLayoutToPlot,
  connectToContainer,
  connectTraceToPlot,
  dereference,
  localize,
  localizeString,
  walkObject,
  LayoutPanel,
  AxesFold,
};

export default PlotlyEditor;
