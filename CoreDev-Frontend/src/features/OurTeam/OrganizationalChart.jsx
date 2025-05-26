import { Tree, TreeNode } from "react-organizational-chart";
import PropTypes from "prop-types";
import { FaPlus, FaMinus, FaUser } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { useEffect, useRef, useState } from "react";

const OrganizationalChart = () => {
  // Refs for relevant nodes
  const areaOpManagerRef = useRef(null);
  const teamLeadsRef = useRef(null);
  const assistantTeamLeadsRef = useRef(null);
  const implementersRef = useRef(null);
  const wrapperRef = useRef(null);
  const SCORef = useRef(null);
  const DevOpsRef = useRef(null);
  const RADheadRef = useRef(null);
  const PCO = useRef(null);
  const ImpHead = useRef(null);

  // State for L-shaped line coordinates
  const [lines, setLines] = useState([]);

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <button onClick={() => zoomIn()}>
          <FaPlus />
          Zoom in
        </button>
        <button onClick={() => zoomOut()}>
          <FaMinus />
          Zoom out
        </button>
        <button onClick={() => resetTransform()}>
          <RiResetLeftLine />
          Reset
        </button>
      </div>
    );
  };

  const OrganizationalNode = ({ title, nodeRef }) => (
    <div className="organizational-node" ref={nodeRef}>
      <div className="organizational-card">
        <FaUser className="organizational-icon" />
        <small>{title}</small>
      </div>
    </div>
  );

  OrganizationalNode.propTypes = {
    title: PropTypes.string.isRequired,
    nodeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  };

  // Calculate L-shaped line coordinates
  const updateLines = () => {
    if (
      !areaOpManagerRef.current ||
      !teamLeadsRef.current ||
      !assistantTeamLeadsRef.current ||
      !implementersRef.current ||
      !wrapperRef.current ||
      !SCORef.current ||
      !DevOpsRef.current ||
      !RADheadRef.current ||
      !PCO.current ||
      !ImpHead.current
    )
      return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    // Get node positions relative to TransformComponent
    const getNodePosition = (ref, options = {}) => {
      const { isSource = false, isMiddle = false, isRight = false } = options;
      const rect = ref.getBoundingClientRect();
      
      return {
        x: isMiddle 
          ? rect.left - wrapperRect.left + (isRight ? rect.width : 0)
          : isSource
          ? rect.left - wrapperRect.left + rect.width / 2
          : isRight
          ? rect.left - wrapperRect.left + rect.width
          : rect.left - wrapperRect.left,
        y: rect.top - wrapperRect.top + (isSource ? rect.height : rect.height / 2)
      };
    };

    const areaOpPos = getNodePosition(areaOpManagerRef.current, { isSource: true });
    const teamLeadsPos = getNodePosition(teamLeadsRef.current, { isRight: true });
    const assistantTeamLeadsPos = getNodePosition(assistantTeamLeadsRef.current, { isRight: true });
    const implementersPos = getNodePosition(implementersRef.current, { isRight: true });
    // SCO connection points
    const SCOLeftPos = getNodePosition(SCORef.current, { isMiddle: true });
    const SCORightPos = getNodePosition(SCORef.current, { isMiddle: true, isRight: true });
    // R&D Head connection point (right side)
    const RADheadRightPos = getNodePosition(RADheadRef.current, { isRight: true });
    // DevOps connection point (left side)
    const DevOpsLeftPos = getNodePosition(DevOpsRef.current);
    // PCO connection point (right side)
    const PCOPos = getNodePosition(PCO.current, { isRight: true });
    // Implementation Head connection point (left side)
    const ImpHeadPos = getNodePosition(ImpHead.current, { isRight: false });

    // Define all lines
    setLines([
      // AOM to Team Leads (ends on right side)
      { 
        from: areaOpPos, 
        to: {
          x: areaOpPos.x,
          y: teamLeadsPos.y
        },
        toFinal: teamLeadsPos,
        isBroken: true
      },
      // AOM to Assistant Team Leads (ends on right side)
      { 
        from: areaOpPos, 
        to: {
          x: areaOpPos.x,
          y: assistantTeamLeadsPos.y
        },
        toFinal: assistantTeamLeadsPos,
        isBroken: true
      },
      // AOM to Implementers (ends on right side)
      { 
        from: areaOpPos, 
        to: {
          x: areaOpPos.x,
          y: implementersPos.y
        },
        toFinal: implementersPos,
        isBroken: true
      },
      // SCO to DevOps (right side connection)
      { 
        from: SCORightPos, 
        to: DevOpsLeftPos,
        isDirect: true
      },
      // SCO to R&D Head (left side connection)
      { 
        from: SCOLeftPos, 
        to: {
          x: RADheadRightPos.x,
          y: SCOLeftPos.y
        },
        toFinal: RADheadRightPos,
        isBroken: true
      },
      // PCO to Implementation Head (ends on left side)
      { 
        from: PCOPos, 
        to: {
          x: PCOPos.x,
          y: ImpHeadPos.y
        },
        toFinal: ImpHeadPos,
        isBroken: true
      }
    ]);
  };

  // Update lines on mount, resize, and zoom/pan
  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <div className="org-chart-container">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={2}
        centerOnInit
        doubleClick={{ disabled: true }}
        limitToBounds={false}
        onTransformed={updateLines}
      >
        {() => (
          <>
            <Controls />
            <div style={{ position: "relative" }} ref={wrapperRef}>
              <TransformComponent>
                <Tree
                  className="tree"
                  lineWidth={"3px"}
                  lineHeight={"2rem"}
                  lineColor={"#ff6a003c"}
                  lineBorderRadius={"10px"}
                  scale={"50%"}
                  label={<OrganizationalNode title="Chief Executive Officer" />}
                >
                  <TreeNode
                    label={<OrganizationalNode title="Chief Operation Officer" />}
                  >
                    <TreeNode
                      label={<OrganizationalNode title="R & D Head" nodeRef={RADheadRef} />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Project Lead" />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Sr. Programmer" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Jr. Programmer" />}
                          />
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="Security Compliance Officer" nodeRef={SCORef} />}
                    />
                    <TreeNode
                      label={<OrganizationalNode title="DevOps Head" nodeRef={DevOpsRef} />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Sec Ops Lead" />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Senior Security Engineer" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Junior Security Engineer" />}
                          />
                        </TreeNode>
                        <TreeNode
                          label={<OrganizationalNode title="Sr. System Admin" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Jr. System Admin" />}
                          />
                        </TreeNode>
                        <TreeNode
                          label={<OrganizationalNode title="Sr. DevOps Engineer" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Jr. DevOps Engineer" />}
                          />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode
                        label={<OrganizationalNode title="Dev Lead" />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Sr. Software Engineer" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Jr. Software Engineer" />}
                          />
                        </TreeNode>
                        <TreeNode
                          label={<OrganizationalNode title="Mobile Dev" />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="API Dev" />}
                          />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode
                        label={<OrganizationalNode title="Production Lead" />}
                      />
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="Hardware Department Head" />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Hardware Sales" />}
                      />
                      <TreeNode
                        label={<OrganizationalNode title="Hardware Clerk" />}
                      />
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="Marketing Head" />}
                    />
                    <TreeNode
                      label={<OrganizationalNode title="Project Compliance Officer" nodeRef={PCO} />}
                    />
                    <TreeNode
                      label={<OrganizationalNode title="Implementation Head" nodeRef={ImpHead} />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Team Leads" nodeRef={teamLeadsRef} />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Assistant Team Leads" nodeRef={assistantTeamLeadsRef} />}
                        >
                          <TreeNode
                            label={<OrganizationalNode title="Implementers" nodeRef={implementersRef} />}
                          />
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="Area Operation Manager" nodeRef={areaOpManagerRef} />}
                    />
                  </TreeNode>
                  <TreeNode
                    label={<OrganizationalNode title="Chief Finance Officer" />}
                  >
                    <TreeNode
                      label={<OrganizationalNode title="Finance Head" />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Bookkeeper" />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Accounting Clerk" />}
                        />
                      </TreeNode>
                      <TreeNode
                        label={<OrganizationalNode title="Billing Head" />}
                      >
                        <TreeNode
                          label={<OrganizationalNode title="Assistant Billing" />}
                        />
                      </TreeNode>
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="HR Manager" />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="HR Assistant" />}
                      />
                    </TreeNode>
                    <TreeNode
                      label={<OrganizationalNode title="Admin Head" />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Liason Officer" />}
                      />
                      <TreeNode
                        label={<OrganizationalNode title="Property Custodian" />}
                      />
                    </TreeNode>
                  </TreeNode>
                </Tree>
              </TransformComponent>
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="9"
                    markerHeight="5"
                    refX="8"
                    refY="2.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 9 3, 0 5" fill="#ff6a00" />
                  </marker>
                </defs>
                {lines.map((line, index) => {
                  // For broken connections (vertical then horizontal)
                  if (line.isBroken) {
                    const pathData = `
                      M ${line.from.x},${line.from.y}
                      V ${line.to.y}
                      H ${line.toFinal.x}
                    `;
                    return (
                      <path
                        key={index}
                        d={pathData}
                        stroke="#ff6a00"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    );
                  }
                  // For direct horizontal connections
                  if (line.isDirect) {
                    const pathData = `
                      M ${line.from.x},${line.from.y}
                      H ${line.to.x}
                    `;
                    return (
                      <path
                        key={index}
                        d={pathData}
                        stroke="#ff6a00"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                         markerEnd="url(#arrowhead)"
                      />
                    );
                  }
                })}
              </svg>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default OrganizationalChart;