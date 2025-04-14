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
      !wrapperRef.current
    )
      return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    // Get node positions relative to TransformComponent
    const getNodePosition = (ref, isSource = false) => {
      const rect = ref.getBoundingClientRect();
      return {
        // For source (AOM), get bottom center
        // For targets, get right center
        x: isSource 
          ? rect.left - wrapperRect.left + rect.width / 2
          : rect.left - wrapperRect.left + rect.width,
        y: isSource
          ? rect.top - wrapperRect.top + rect.height
          : rect.top - wrapperRect.top + rect.height / 2
      };
    };

    const areaOpPos = getNodePosition(areaOpManagerRef.current, true);
    const teamLeadsPos = getNodePosition(teamLeadsRef.current);
    const assistantTeamLeadsPos = getNodePosition(assistantTeamLeadsRef.current);
    const implementersPos = getNodePosition(implementersRef.current);

    // Define three distinct L-shaped lines
    setLines([
      { from: areaOpPos, to: teamLeadsPos },
      { from: areaOpPos, to: assistantTeamLeadsPos },
      { from: areaOpPos, to: implementersPos },
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
                  label={
                    <OrganizationalNode title="Chief Executive Officer" />
                  }
                >
                  <TreeNode
                    label={
                      <OrganizationalNode title="Chief Operation Officer" />
                    }
                  >
                    <TreeNode label={<OrganizationalNode title="R & D Head" />}>
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
                      label={<OrganizationalNode title="DevsOps Head" />}
                    >
                      <TreeNode
                        label={<OrganizationalNode title="Sec Ops Lead" />}
                      >
                        <TreeNode
                          label={
                            <OrganizationalNode title="Senior Security Engineer" />
                          }
                        >
                          <TreeNode
                            label={
                              <OrganizationalNode title="Junior Security Engineer" />
                            }
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
                          label={
                            <OrganizationalNode title="Sr. DevOps Engineer" />
                          }
                        >
                          <TreeNode
                            label={
                              <OrganizationalNode title="Jr. DevOps Engineer" />
                            }
                          />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode
                        label={<OrganizationalNode title="Dev Lead" />}
                      >
                        <TreeNode
                          label={
                            <OrganizationalNode title="Sr. Software Engineer" />
                          }
                        >
                          <TreeNode
                            label={
                              <OrganizationalNode title="Jr. Software Engineer" />
                            }
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
                      label={
                        <OrganizationalNode title="Hardware Department Head" />
                      }
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
                      label={<OrganizationalNode title="Implementation Head" />}
                    >
                      <TreeNode
                        label={
                          <OrganizationalNode
                            title="Team Leads"
                            nodeRef={teamLeadsRef}
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <OrganizationalNode
                              title="Assistant Team Leads"
                              nodeRef={assistantTeamLeadsRef}
                            />
                          }
                        >
                          <TreeNode
                            label={
                              <OrganizationalNode
                                title="Implementers"
                                nodeRef={implementersRef}
                              />
                            }
                          />
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                    <TreeNode
                      label={
                        <OrganizationalNode
                          title="Area Operation Manager"
                          nodeRef={areaOpManagerRef}
                        />
                      }
                    />
                  </TreeNode>
                  <TreeNode
                    label={<OrganizationalNode title="Chief Finance Officer" />}
                  >
                    <TreeNode label={<OrganizationalNode title="Finance Head" />}>
                      <TreeNode
                        label={<OrganizationalNode title="Bookeeper" />}
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
                    <TreeNode label={<OrganizationalNode title="HR Manager" />}>
                      <TreeNode
                        label={<OrganizationalNode title="HR Assistant" />}
                      />
                    </TreeNode>
                    <TreeNode label={<OrganizationalNode title="Admin Head" />}>
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
              {/* SVG Overlay for L-Shaped Cross-Connections */}
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
                {lines.map((line, index) => {
                  // L-shaped path: vertical then horizontal
                  const midY = line.to.y;
                  const pathData = `
                    M ${line.from.x},${line.from.y}
                    V ${midY}
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
                    />
                  );
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