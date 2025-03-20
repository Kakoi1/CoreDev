import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { FaPlus, FaMinus, FaUser } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";

const OrganizationalChart = () => {
    const StyledNode = styled.div`
        padding: 2rem 2.25rem;
        border-radius: 0.5rem;
        display: inline-block;
        margin: 0 1rem;
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
                            lineWidth={"3px"}
                            lineHeight={"2rem"}
                            lineColor={"#ff6a003c"}
                            lineBorderRadius={"10px"}
                            scale={"50%"}
                            label={
                                <StyledNode>
                                    <div className="organizational-card">
                                        <FaUser className="organizational-icon" />
                                        <small>Chief Executive Officer</small>
                                    </div>
                                </StyledNode>
                            }
                        >
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            <FaUser className="organizational-icon" />
                                            <small>
                                                Chief Operation Officer /
                                                Implementation Head
                                            </small>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <FaUser className="organizational-icon" />

                                                <small>DevOps Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <FaUser className="organizational-icon" />

                                                <small>Tech Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

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
                                                <FaUser className="organizational-icon" />

                                                <small>R & D Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

                                                    <small>
                                                        Sr. Programmer
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <StyledNode>
                                                    <div className="organizational-card">
                                                        <FaUser className="organizational-icon" />

                                                        <small>
                                                            Jr. Programmer
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
                                                <FaUser className="organizational-icon" />

                                                <small>
                                                    Area Operation Manager -
                                                    Luzon
                                                </small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

                                                    <small>Luzon Implementation Team</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    // label={
                                    //     <StyledNode>
                                    //         <div className="organizational-card">
                                    //             <FaUser className="organizational-icon" />

                                    //             <small>
                                    //                 Area Operation Manager -
                                    //                 Visayas
                                    //             </small>
                                    //         </div>
                                    //     </StyledNode>
                                    // }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

                                                    <small>Visayas Implementation Team</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <FaUser className="organizational-icon" />

                                                <small>
                                                    Area Operation Manager -
                                                    Mindanao
                                                </small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

                                                    <small>Mindanao Implementation Team</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <FaUser className="organizational-icon" />

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
                                            <FaUser className="organizational-icon" />

                                            <small>
                                                Chief Finance Officer / HR Director
                                            </small>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <FaUser className="organizational-icon" />

                                                <small>Head Finance</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

                                                    <small>Bookeeper</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

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
                                                    <FaUser className="organizational-icon" />

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
                                                    <FaUser className="organizational-icon" />

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
                                                <FaUser className="organizational-icon" />

                                                <small>HR Manager</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <FaUser className="organizational-icon" />

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
