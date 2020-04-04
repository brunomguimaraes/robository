import React from 'react';

import { Button } from 'antd';

import "antd/dist/antd.css";
import './style.css';

function AvaliableApps() {
  return (
    <div className="avaliableApps">
      <Button type="primary" shape="round" size={'large'} className="appsButton">
        Dino Gabriel
      </Button>
    </div>
  );
}

export default AvaliableApps;
