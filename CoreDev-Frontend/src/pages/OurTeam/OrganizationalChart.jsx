import { Tree, TreeNode } from "react-organizational-chart";
import PropTypes from "prop-types";
import { FaPlus, FaMinus, FaUser } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";

const OrganizationalChart = () => {
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

    const OrganizationalNode = ({ title }) => (
        <div className="organizational-node">
            <div className="organizational-card">
                <FaUser className="organizational-icon" />
                <small>{title}</small>
            </div>
        </div>
    );

    OrganizationalNode.propTypes = {
        title: PropTypes.string.isRequired,
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
                                <OrganizationalNode title="Chief Execute Officer" />
                            }
                        >
                            <TreeNode
                                label={
                                    <OrganizationalNode title="Chief Operation Officer" />
                                }
                            >
                                {/* R & D Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="R & D Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Project Lead" />
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <OrganizationalNode title="Sr. Programmer" />
                                            }
                                        >
                                            <TreeNode
                                                label={
                                                    <OrganizationalNode title="Jr. Programmer" />
                                                }
                                            />
                                        </TreeNode>
                                    </TreeNode>
                                </TreeNode>
                                {/* end of R & D Head Tree */}

                                {/* DevsOps Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="DevsOps Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Sec Ops Lead" />
                                        }
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
                                            label={
                                                <OrganizationalNode title="Sr. System Admin" />
                                            }
                                        >
                                            <TreeNode
                                                label={
                                                    <OrganizationalNode title="Jr. System Admin" />
                                                }
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
                                        label={
                                            <OrganizationalNode title="Dev Lead" />
                                        }
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
                                            label={
                                                <OrganizationalNode title="Mobile Dev" />
                                            }
                                        >
                                            <TreeNode
                                                label={
                                                    <OrganizationalNode title="API Dev" />
                                                }
                                            />
                                        </TreeNode>
                                    </TreeNode>
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Production Lead" />
                                        }
                                    />
                                </TreeNode>
                                {/* end of DevsOps Head Tree */}

                                {/* Hardware Department Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Hardware Department Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Hardware Sales" />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Hardware Clerk" />
                                        }
                                    />
                                </TreeNode>
                                {/* end of Hardware Department Head Tree */}

                                {/* Marketing Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Marketing Head" />
                                    }
                                />
                                {/* end of Marketing Head Tree */}

                                {/* Implementation Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Implementation Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Team Leads" />
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <OrganizationalNode title="Assistant Team Leads" />
                                            }
                                        >
                                            <TreeNode
                                                label={
                                                    <OrganizationalNode title="Implementers" />
                                                }
                                            />
                                        </TreeNode>
                                    </TreeNode>
                                </TreeNode>
                                {/* end of Implementation Head Tree */}

                                {/* Area Operation Manager Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Area Operation Manager" />
                                    }
                                />
                                {/* end of Area Operation Manager Tree */}
                            </TreeNode>
                            <TreeNode
                                label={
                                    <OrganizationalNode
                                        title="Chief Finance Officer"
                                    />
                                }
                            >
                                {/* Finance Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Finance Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Bookeeper" />
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <OrganizationalNode title="Accounting Clerk" />
                                            }
                                        />
                                    </TreeNode>
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Billing Head" />
                                        }
                                    >
                                        <TreeNode
                                            label={
                                                <OrganizationalNode title="Assistant Billing" />
                                            }
                                        />
                                    </TreeNode>
                                </TreeNode>
                                {/* end of Finance Head Tree */}

                                {/* HR Manager Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="HR Manager" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="HR Assistant" />
                                        }
                                    />
                                </TreeNode>
                                {/* end of HR Manager Tree */}

                                {/* Admin Head Tree */}
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Admin Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Liason Officer" />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Property Custodian" />
                                        }
                                    />
                                </TreeNode>
                                {/* end of Admin Head Tree */}
                            </TreeNode>
                        </Tree>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default OrganizationalChart;
