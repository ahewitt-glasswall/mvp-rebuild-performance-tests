import React, { useEffect } from "react";
import ArchitectureImage from "./architecture.png";
import DockerSequenceImage from "./dockerSequence.png";

import styles from "./ArchitectureView.module.scss";

export interface ArchitectureViewProps { onLoad: Function }

const ArchitectureView = (props: ArchitectureViewProps) => {

    useEffect(() => {
        props.onLoad("Architecture", "Architecture");
    });

    return (
        <div className={styles.architecturePageContainer}>
            <h3>Executing a Test</h3>
            <hr />
            <img src={ArchitectureImage} alt="Overall architecture for running a test."/>

            <h3>Inside the Docker Container</h3>
            <hr />
            <img src={DockerSequenceImage} alt="Sequence diagram for the docker container tests run in." />
        </div>
    );
};

export default ArchitectureView;