import React from "react";

class ScrollToTop extends React.Component {

    getSnapshotBeforeUpdate() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return this.props.children;
    }
}

export default ScrollToTop;