import React, {Component} from 'react';
import Selecto from "react-selecto";
import eventOperateStore from "../../designer/operate-provider/EventOperateStore";
import {observer} from "mobx-react";

class GroupSelectable extends Component {
    selectorRef = React.createRef<Selecto>();

    componentDidMount() {
        const {setSelectorRef} = eventOperateStore;
        setSelectorRef(this.selectorRef);
    }

    render() {
        const {movableRef, targets, setTargets} = eventOperateStore;
        return (
            <>
                {this.props.children}
                <Selecto ref={this.selectorRef}
                         dragContainer={".lc-event-container"}
                         selectableTargets={[".lc-comp-item"]}
                         hitRate={0}
                         selectByClick={true}
                         selectFromInside={false}
                         toggleContinueSelect={["shift"]}
                         ratio={0}
                         onDragStart={e => {
                             const movable: any = movableRef.current;
                             const target = e.inputEvent.target;
                             if ((movable && movable.isMoveableElement(target))
                                 || targets.some((t: any) => t === target || t.contains(target))
                             ) {
                                 e.stop();
                             }
                         }}
                         onSelect={(e: any) => {
                             let selected = e.selected.filter((item: any) => {
                                 return item.dataset.locked !== 'true';
                             });
                             setTargets(selected);
                         }}
                         onSelectEnd={e => {
                             const movable: any = movableRef.current;
                             if (movable && e.isDragStart) {
                                 e.inputEvent.preventDefault();
                                 setTimeout(() => {
                                     movable.dragStart(e.inputEvent);
                                 });
                             }
                         }}
                />
            </>
        );
    }
}

export default observer(GroupSelectable);