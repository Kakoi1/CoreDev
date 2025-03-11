import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";

const OrganizationalChart = () => {
    const StyledNode = styled.div`
        padding: 2rem;
        border-radius: 0.5rem;
        display: inline-block;
        background-color: #fbbb80;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
        color: var(--black);
    `;

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

    return (
        <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={2}
            centerOnInit
            doubleClick={{ disabled: true }}
            limitToBounds={false}
        >
            {() => (
                <>
                    <Controls />
                    <TransformComponent>
                        <Tree
                            className="tree"
                            lineWidth={"2px"}
                            lineColor={"#ff6a003c"}
                            lineBorderRadius={"10px"}
                            scale={"50%"}
                            label={
                                <StyledNode>
                                    <div className="organizational-card">
                                        <small>Chief Execute Officer</small>
                                    </div>
                                </StyledNode>
                            }
                        >
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            <small>
                                                Chief Operation Officer / In
                                            </small>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Devsops Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Tech Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>
                                                        Hardware Staff
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>R & D Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>Sr.Programmer</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <StyledNode>
                                                    <div className="organizational-card">
                                                        <small>
                                                            Jr.Programmer
                                                        </small>
                                                    </div>
                                                </StyledNode>
                                            }
                                        />
                                    </TreeNode>
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Team ACES</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Team AGILE</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Team MEGA</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />

                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>AOM - Luzon</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>
                                                        Team Divergent
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>AOM Mindanao</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>Team CMA</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>Team CPA</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Marketing Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                            </TreeNode>
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            <small>
                                                Chief Finance Officer / HRD
                                            </small>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>Head Finance</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>Bookeeper</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>
                                                        Billing / Collection
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>
                                                        Accounting Staff
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>
                                                        Liaison Officer
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <small>HR Manager</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <small>HR Assistant</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default OrganizationalChart;
