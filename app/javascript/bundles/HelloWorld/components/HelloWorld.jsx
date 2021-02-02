import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <label htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

const Sample = (props) => {
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



