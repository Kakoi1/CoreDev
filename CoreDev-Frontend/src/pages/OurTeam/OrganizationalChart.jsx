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
                                        <h3>Al A. Caputol</h3>
                                        <small>Chief Execute Officer</small>
                                    </div>
                                </StyledNode>
                            }
                        >
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <div className="organizational-card">
                                            <h3>Jeyreuben Singco</h3>
                                            <small>
                                                Chief Execute Officer / In
                                            </small>
                                        </div>
                                    </StyledNode>
                                }
                            >
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Mark Anthony Del Coro</h3>
                                                <small>Devsops Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Jun Requino</h3>
                                                <small>Tech Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Glenda Zamora</h3>
                                                    <small>
                                                        Hardware Staff
                                                    </small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Loschen Bacus</h3>
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
                                                <h3>Bree Dingding</h3>
                                                <small>R & D Head</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Diza Jean Tambalos</h3>
                                                    <small>Sr.Programmer</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Clyde Ortega</h3>
                                                    <small>Sr.Programmer</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Juner Tadlip</h3>
                                                    <small>Sr.Programmer</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Ella Mae Dindin</h3>
                                                <small>Team ACES</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Jomar Belarma</h3>
                                                <small>Team AGILE</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />
                                 <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Joram Palma</h3>
                                                <small>Team MEGA</small>
                                            </div>
                                        </StyledNode>
                                    }
                                />

                                <TreeNode
                                    label={
                                        <StyledNode>
                                            <div className="organizational-card">
                                                <h3>Deodomie Bitang</h3>
                                                <small>AOM - Luzon</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Nina Paz Humoc</h3>
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
                                                <h3>April Rose Casa...</h3>
                                                <small>AOM Mindanao</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Sheremay Mongaya</h3>
                                                    <small>Team CMA</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Icee Evon Pelarada</h3>
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
                                                <h3>Rachel Navarro</h3>
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
                                            <h3>Charrie H. Caputol</h3>
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
                                                <h3>Clarisa H. Ismael</h3>
                                                <small>Head Finance</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>
                                                        Rosemarie V. Coronado
                                                    </h3>
                                                    <small>Bookeeper</small>
                                                </div>
                                            </StyledNode>
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Hannabel Endrina</h3>
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
                                                    <h3>Alyssa Viodor</h3>
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
                                                    <h3>Jasmin Yurag</h3>
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
                                                <h3>Catherine H. Salgados</h3>
                                                <small>HR Manager</small>
                                            </div>
                                        </StyledNode>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <StyledNode>
                                                <div className="organizational-card">
                                                    <h3>Alchame Mae Caputol</h3>
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
