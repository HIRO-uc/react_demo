import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Sample = () => {
  return (
      <Tabs>
          <TabList>
              <Tab>読みたい本</Tab>
              
              <Tab>読んでいる本</Tab>
              <Tab>読了</Tab>
          </TabList>
          <TabPanel>
              <h2>嫌われる勇気</h2>
          </TabPanel>
          <TabPanel>
              <h2>夢をかなえるゾウ</h2>
          </TabPanel>
          <TabPanel>
              <h2>mindset</h2>
          </TabPanel>
      </Tabs>
  )
}

export default Sample;