import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

import "antd/dist/antd.css";
import './style.css';

function AvaliableApps() {
  return (
    <div className="avaliableApps">
      <Link to="/dinotron">
        <Button type="primary" shape="round" size={'large'} className="appsButton">
          Dinotron Rex
        </Button>
      </Link>
    </div>
  );
}

export default AvaliableApps;
