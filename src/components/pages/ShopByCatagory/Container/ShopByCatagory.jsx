import React, { useState } from "react";
import ActionFigures from "../Catagory/CategoryNames/ActionFigures";
import BuildingSets from "../Catagory/CategoryNames/BuildingSets";
import RemoteControl from "../Catagory/CategoryNames/RemoteControl";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './ShopByCatagory.css'

const ShopByCatagory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="nav-design my-8 responsive-tabs-container   ">
      <h2 className="text-center md:text-6xl mb-2">
        Shop By <span className="text-orange-500 ">ROBO</span> Category
      </h2>
      <div className="category-card">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <TabList className="md:text-3xl simple-text my-8 py-2 px-2 bg-gradient-to-r from-blue-400 to-purple-500">
            <Tab>ActionFigures</Tab>
            <Tab>BuildingSets</Tab>
            <Tab>RemoteControl</Tab>
          </TabList>

          <TabPanel>{activeTab === 0 && <ActionFigures />}</TabPanel>
          <TabPanel>{activeTab === 1 && <BuildingSets />}</TabPanel>
          <TabPanel>{activeTab === 2 && <RemoteControl />}</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCatagory;
