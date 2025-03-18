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
                                    <OrganizationalNode
                                        title="Chief Operation Officer /
                                                Implementation Head"
                                    />
                                }
                            >
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="DevOps Head" />
                                    }
                                />
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Tech Head" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Hardware Staff" />
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="R & D Head" />
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
                                <TreeNode
                                    label={
                                        <OrganizationalNode
                                            title="Area Operation Manager -
                                                    Luzon"
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode
                                                title="Luzon Implementation
                                                        Team"
                                            />
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Visayas Implementation Team" />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <OrganizationalNode
                                            title="Area Operation Manager -
                                                    Mindanao"
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode
                                                title="Mindanao Implementation
                                                        Team"
                                            />
                                        }
                                    />
                                </TreeNode>
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Marketing Head" />
                                    }
                                />
                            </TreeNode>
                            <TreeNode
                                label={
                                    <OrganizationalNode
                                        title="Chief Finance Officer / HR
                                                Director"
                                    />
                                }
                            >
                                <TreeNode
                                    label={
                                        <OrganizationalNode title="Head Finance" />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Bookeeper" />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Billing / Collection" />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Accounting Staff" />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <OrganizationalNode title="Liason Officer" />
                                        }
                                    />
                                </TreeNode>
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
                            </TreeNode>
                        </Tree>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default OrganizationalChart;
