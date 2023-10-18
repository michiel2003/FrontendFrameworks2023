import TabListContentContainer from "./TabListContentContainer.tsx";
import TabButton from "./tabButton.tsx";
import TabPanelContentContainer from "./tabPanelContentContainer.tsx";
import {useState} from "react";



export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<number>(0)

    const changeTab = (id:number) => {
        setActiveTab(id)
    }

    return (
        <>
            <TabListContentContainer>
                <TabButton onClick={() => changeTab(0)} id={0} $isActive={activeTab == 0}>Tab 1</TabButton>
                <TabButton onClick={() => changeTab(1)} id={1} $isActive={activeTab == 1}>Tab 2</TabButton>
                <TabButton onClick={() => changeTab(2)} id={2} $isActive={activeTab == 2}>Tab 3</TabButton>
            </TabListContentContainer>
            <TabPanelContentContainer id={0} $isActive={activeTab == 0}>
                <p>This is the text on tab 1</p>
            </TabPanelContentContainer>
            <TabPanelContentContainer id={1} $isActive={activeTab == 1}>
                <h1>this is the title of tab 2</h1><br/>
                <h1>   this is the text on tab 2</h1>
            </TabPanelContentContainer>
            <TabPanelContentContainer id={2} $isActive={activeTab == 2}>
                <h1>this is the title on tab 3     </h1><br/>
                <h1>this is the text on tab 3</h1>
            </TabPanelContentContainer>
        </>
    );
};