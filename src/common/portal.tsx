import React from 'react';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';
const doc = window.document;
class Portal extends React.Component {
    node = doc.createElement('div');
    render() {
        // 组件本身 render null，什么都不渲染
        return null;
    }

    componentDidMount() {
        const doc = window.document;
        this.node = doc.createElement('div');
        this.node.className='portal'
        doc.body.appendChild(this.node);

        this.renderPortal(this.props);
    }

    componentDidUpdate() {
        this.renderPortal(this.props);
    }

    componentWillUnmount() {
        unmountComponentAtNode(this.node);
        window.document.body.removeChild(this.node);
    }

    renderPortal(props: any) {
        unstable_renderSubtreeIntoContainer(
            this, //代表当前组件
            <>
              {props.children}
            </>, // 塞进传送门的JSX
            this.node // 传送门另一端的DOM node
        );
    }
}

export default Portal;