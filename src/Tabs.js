import TabItem from "./TabItem";
import { useState } from "react";

const Tabs = ( { TabData } ) => {

    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className="tabs">
            {
                ['aerobic', 'strength', 'yoga', 'pilates'].map((tab, index) => (
                    <TabItem 
                    key = { index }
                    tab = { tab }
                    index = { index }
                    setActiveTab = {setActiveTab}/>
                ))
            }
            <div>{TabData[activeTab].content}</div>
            </div>
    )
}

export default Tabs;