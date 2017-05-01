import React from 'react';
import classnames from 'classnames';

import GraphContainer from "../containers/GraphContainer";

const SessionGraphTab = ({
  session, active, onBeforeGraphRender, onGraphRendered, onNodeSelected,
  onNodeHovered, selectedNode, hoveredNode
}) => {
  return (
    <div className="content-container">
      <GraphContainer
        response={session.response}
        onBeforeRender={onBeforeGraphRender}
        onRendered={onGraphRendered}
        onNodeSelected={onNodeSelected}
        onNodeHovered={onNodeHovered}
        selectedNode={selectedNode}
        hoveredNode={hoveredNode}
      />
    </div>
  );
};

export default SessionGraphTab;