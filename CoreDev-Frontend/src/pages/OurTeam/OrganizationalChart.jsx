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
                                        {/* <h3>Al A. Caputol</h3> */}
                                        <h3>Chief Execute Officer</h3>
                                    </div>
                                </StyledNode>
                            }
                        >
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            {/* <h3>Jeyreuben Singco</h3> */}
                                            <h3>
                                                Chief Execute Officer / In
                                            </h3>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Mark Anthony Del Coro</h3> */}
                                                <h3>Devsops Head</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Jun Requino</h3> */}
                                                <h3>Tech Head</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Glenda Zamora</h3> */}
                                                    <h3>
                                                        Hardware Staff
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Loschen Bacus</h3> */}
                                                    <h3>
                                                        Hardware Staff
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Bree Dingding</h3> */}
                                                <h3>R & D Head</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Diza Jean Tambalos</h3> */}
                                                    <h3>Sr.Programmer</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Clyde Ortega</h3> */}
                                                    <h3>Sr.Programmer</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Juner Tadlip</h3> */}
                                                    <h3>Sr.Programmer</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Ella Mae Dindin</h3> */}
                                                <h3>Team ACES</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Jomar Belarma</h3> */}
                                                <h3>Team AGILE</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                 <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Joram Palma</h3> */}
                                                <h3>Team MEGA</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                />

                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Deodomie Bitang</h3> */}
                                                <h3>AOM - Luzon</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Nina Paz Humoc</h3> */}
                                                    <h3>
                                                        Team Divergent
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>April Rose Casa...</h3> */}
                                                <h3>AOM Mindanao</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Sheremay Mongaya</h3> */}
                                                    <h3>Team CMA</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Icee Evon Pelarada</h3> */}
                                                    <h3>Team CPA</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Rachel Navarro</h3> */}
                                                <h3>Marketing Head</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                            </TreeNode>
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            {/* <h3>Charrie H. Caputol</h3> */}
                                            <small>
                                                {" "}
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
                                                {/* <h3>Clarisa H. Ismael</h3> */}
                                                <h3>Head Finance</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>
                                                        Rosemarie V. Coronado
                                                    </h3> */}
                                                    <h3>Bookeeper</h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Hannabel Endrina</h3> */}
                                                    <h3>
                                                        Billing / Collection
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Alyssa Viodor</h3> */}
                                                    <h3>
                                                        Accounting Staff
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Jasmin Yurag</h3> */}
                                                    <h3>
                                                        Liaison Officer
                                                    </h3>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                {/* <h3>Catherine H. Salgados</h3> */}
                                                <h3>HR Manager</h3>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    {/* <h3>Alchame Mae Caputol</h3> */}
                                                    <h3>HR Assistant</h3>
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
